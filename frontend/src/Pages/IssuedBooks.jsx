import { useState, useEffect } from 'react';
import { db , auth} from "../../firebase"; // Import Firebase connection
import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  query, 
  where, 
  serverTimestamp,
  orderBy
} from 'firebase/firestore';

export default function LibraryIssuesPage() {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [newIssue, setNewIssue] = useState({
    bookTitle: "",
    borrower: "",
    issueDate: "",
    dueDate: "",
    status: "Issued"
  });

  const [filter, setFilter] = useState("All");
  const [user, setUser] = useState(null);

  // Fetch issues from Firebase on component mount
  useEffect(() => {
    const fetchIssues = async () => {
      try {
        setLoading(true);
        const issuesCollection = collection(db, "issues");
        const issuesQuery = query(issuesCollection, orderBy("issueDate", "desc"));
        const querySnapshot = await getDocs(issuesQuery);
        
        const issuesData = [];
        querySnapshot.forEach((doc) => {
          issuesData.push({
            id: doc.id,
            ...doc.data()
          });
        });
        
        setIssues(issuesData);
      } catch (error) {
        console.error("Error fetching issues:", error);
      } finally {
        setLoading(false);
      }
    };

    // Check authentication state
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        fetchIssues();
      }
    });

    return () => unsubscribe();
  }, []);

  // Add new issue to Firebase
  const handleAddIssue = async () => {
    if (!user) {
      alert("Please sign in to add issues");
      return;
    }
    
    if (newIssue.bookTitle && newIssue.borrower && newIssue.issueDate && newIssue.dueDate) {
      try {
        const issueData = {
          ...newIssue,
          createdBy: user.uid,
          createdAt: serverTimestamp(),
        };
        
        const docRef = await addDoc(collection(db, "issues"), issueData);
        
        // Add to local state with the Firebase document ID
        setIssues([{
          id: docRef.id,
          ...issueData,
          createdAt: new Date() // For immediate display before server timestamp resolves
        }, ...issues]);
        
        // Reset form
        setNewIssue({
          bookTitle: "",
          borrower: "",
          issueDate: "",
          dueDate: "",
          status: "Issued"
        });
        
      } catch (error) {
        console.error("Error adding issue:", error);
        alert("Error adding issue. Please try again.");
      }
    } else {
      alert("Please fill in all required fields");
    }
  };

  // Return a book (update status in Firebase)
  const handleReturn = async (id) => {
    if (!user) {
      alert("Please sign in to update issues");
      return;
    }
    
    try {
      const issueRef = doc(db, "issues", id);
      await updateDoc(issueRef, {
        status: "Returned",
        returnedAt: serverTimestamp(),
        returnedBy: user.uid
      });
      
      // Update local state
      setIssues(issues.map(issue => 
        issue.id === id ? { ...issue, status: "Returned" } : issue
      ));
      
    } catch (error) {
      console.error("Error updating issue:", error);
      alert("Error updating issue. Please try again.");
    }
  };

  // Filter issues based on status
  const filteredIssues = filter === "All" 
    ? issues 
    : issues.filter(issue => issue.status === filter);
  
  // Status color mapping
  const getStatusColor = (status) => {
    switch(status) {
      case "Overdue": return "#f87171";
      case "Issued": return "#60a5fa";
      case "Returned": return "#34d399";
      default: return "black";
    }
  };

  // Handle sign in
  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  // Handle sign out
  const handleSignOut = async () => {
    try {
      await auth.signOut();
      setIssues([]);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  // Styles
  const styles = {
    container: {
      padding: '24px',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif'
    },
    header: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '24px',
      textAlign: 'center'
    },
    authContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginBottom: '16px'
    },
    authButton: {
      backgroundColor: '#4285F4',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer'
    },
    userInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    userImage: {
      width: '24px',
      height: '24px',
      borderRadius: '50%'
    },
    filterContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '24px'
    },
    filterButtonGroup: {
      display: 'flex',
      gap: '8px'
    },
    filterButton: (isActive) => ({
      padding: '8px 16px',
      borderRadius: '4px',
      cursor: 'pointer',
      backgroundColor: isActive ? '#1f2937' : '#e5e7eb',
      color: isActive ? 'white' : 'black',
      border: 'none'
    }),
    filterButtonIssued: (isActive) => ({
      padding: '8px 16px',
      borderRadius: '4px',
      cursor: 'pointer',
      backgroundColor: isActive ? '#2563eb' : '#e5e7eb',
      color: isActive ? 'white' : 'black',
      border: 'none'
    }),
    filterButtonOverdue: (isActive) => ({
      padding: '8px 16px',
      borderRadius: '4px',
      cursor: 'pointer',
      backgroundColor: isActive ? '#dc2626' : '#e5e7eb',
      color: isActive ? 'white' : 'black',
      border: 'none'
    }),
    filterButtonReturned: (isActive) => ({
      padding: '8px 16px',
      borderRadius: '4px',
      cursor: 'pointer',
      backgroundColor: isActive ? '#10b981' : '#e5e7eb',
      color: isActive ? 'white' : 'black',
      border: 'none'
    }),
    tableContainer: {
      marginBottom: '32px',
      overflowX: 'auto'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse'
    },
    tableHead: {
      backgroundColor: '#f3f4f6'
    },
    tableHeaderCell: {
      border: '1px solid #d1d5db',
      padding: '8px 16px',
      textAlign: 'left'
    },
    tableCell: {
      border: '1px solid #d1d5db',
      padding: '8px 16px'
    },
    statusBadge: (status) => ({
      backgroundColor: getStatusColor(status),
      color: 'white',
      padding: '4px 8px',
      borderRadius: '4px',
      display: 'inline-block'
    }),
    returnButton: {
      backgroundColor: '#10b981',
      color: 'white',
      padding: '4px 12px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer'
    },
    formContainer: {
      backgroundColor: '#f9fafb',
      padding: '24px',
      borderRadius: '8px',
      border: '1px solid #e5e7eb'
    },
    formTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '16px'
    },
    formGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '16px',
      marginBottom: '16px'
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column'
    },
    label: {
      fontSize: '14px',
      fontWeight: '500',
      marginBottom: '4px'
    },
    input: {
      padding: '8px 16px',
      border: '1px solid #d1d5db',
      borderRadius: '4px',
      width: '100%'
    },
    addButton: {
      backgroundColor: '#3b82f6',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer'
    },
    statsContainer: {
      marginTop: '32px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '16px'
    },
    statCard: (color) => ({
      backgroundColor: color,
      padding: '16px',
      borderRadius: '8px'
    }),
    statTitle: {
      fontWeight: 'bold'
    },
    statValue: {
      fontSize: '24px',
      fontWeight: 'bold'
    },
    loadingContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '200px'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Library Book Issues</h1>
      
      {/* Authentication */}
      <div style={styles.authContainer}>
        {user ? (
          <div style={styles.userInfo}>
            {user.photoURL && <img src={user.photoURL} alt="User" style={styles.userImage} />}
            <span>{user.displayName || user.email}</span>
            <button onClick={handleSignOut} style={{...styles.authButton, backgroundColor: '#6B7280'}}>
              Sign Out
            </button>
          </div>
        ) : (
          <button onClick={handleSignIn} style={styles.authButton}>
            Sign In with Google
          </button>
        )}
      </div>
      
      {/* Filter Controls */}
      <div style={styles.filterContainer}>
        <div style={styles.filterButtonGroup}>
          <button 
            onClick={() => setFilter("All")}
            style={styles.filterButton(filter === "All")}
          >
            All
          </button>
          <button 
            onClick={() => setFilter("Issued")}
            style={styles.filterButtonIssued(filter === "Issued")}
          >
            Issued
          </button>
          <button 
            onClick={() => setFilter("Overdue")}
            style={styles.filterButtonOverdue(filter === "Overdue")}
          >
            Overdue
          </button>
          <button 
            onClick={() => setFilter("Returned")}
            style={styles.filterButtonReturned(filter === "Returned")}
          >
            Returned
          </button>
        </div>
      </div>
      
      {/* Issues Table */}
      <div style={styles.tableContainer}>
        {loading ? (
          <div style={styles.loadingContainer}>
            <p>Loading issues...</p>
          </div>
        ) : (
          <table style={styles.table}>
            <thead style={styles.tableHead}>
              <tr>
                <th style={styles.tableHeaderCell}>Book Title</th>
                <th style={styles.tableHeaderCell}>Borrower</th>
                <th style={styles.tableHeaderCell}>Issue Date</th>
                <th style={styles.tableHeaderCell}>Due Date</th>
                <th style={styles.tableHeaderCell}>Status</th>
                <th style={styles.tableHeaderCell}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredIssues.length > 0 ? (
                filteredIssues.map(issue => (
                  <tr key={issue.id}>
                    <td style={styles.tableCell}>{issue.bookTitle}</td>
                    <td style={styles.tableCell}>{issue.borrower}</td>
                    <td style={styles.tableCell}>{issue.issueDate}</td>
                    <td style={styles.tableCell}>{issue.dueDate}</td>
                    <td style={styles.tableCell}>
                      <span style={styles.statusBadge(issue.status)}>
                        {issue.status}
                      </span>
                    </td>
                    <td style={styles.tableCell}>
                      {issue.status !== "Returned" && (
                        <button 
                          onClick={() => handleReturn(issue.id)}
                          style={styles.returnButton}
                          disabled={!user}
                        >
                          Return
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" style={{...styles.tableCell, textAlign: 'center'}}>
                    {user ? "No issues found" : "Please sign in to view issues"}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
      
      {/* Add New Issue Form */}
      {user && (
        <div style={styles.formContainer}>
          <h2 style={styles.formTitle}>Add New Issue</h2>
          <div style={styles.formGrid}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Book Title</label>
              <input
                type="text"
                value={newIssue.bookTitle}
                onChange={e => setNewIssue({...newIssue, bookTitle: e.target.value})}
                style={styles.input}
                placeholder="Enter book title"
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Borrower Name</label>
              <input
                type="text"
                value={newIssue.borrower}
                onChange={e => setNewIssue({...newIssue, borrower: e.target.value})}
                style={styles.input}
                placeholder="Enter borrower name"
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Issue Date</label>
              <input
                type="date"
                value={newIssue.issueDate}
                onChange={e => setNewIssue({...newIssue, issueDate: e.target.value})}
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Due Date</label>
              <input
                type="date"
                value={newIssue.dueDate}
                onChange={e => setNewIssue({...newIssue, dueDate: e.target.value})}
                style={styles.input}
              />
            </div>
          </div>
          <button
            onClick={handleAddIssue}
            style={styles.addButton}
          >
            Add Issue
          </button>
        </div>
      )}
      
      {/* Stats Summary */}
      {user && (
        <div style={styles.statsContainer}>
          <div style={styles.statCard('#dbeafe')}>
            <h3 style={styles.statTitle}>Currently Issued</h3>
            <p style={styles.statValue}>{issues.filter(i => i.status === "Issued").length}</p>
          </div>
          <div style={styles.statCard('#fee2e2')}>
            <h3 style={styles.statTitle}>Overdue</h3>
            <p style={styles.statValue}>{issues.filter(i => i.status === "Overdue").length}</p>
          </div>
          <div style={styles.statCard('#d1fae5')}>
            <h3 style={styles.statTitle}>Returned</h3>
            <p style={styles.statValue}>{issues.filter(i => i.status === "Returned").length}</p>
          </div>
        </div>
      )}
    </div>
  );
}