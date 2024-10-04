// import React, { useEffect, useState } from 'react';
// import '../index.css'; 
// const FeedbackPage = () => {
//   const [feedbackData, setFeedbackData] = useState([]);
//   const [positiveSummary, setPositiveSummary] = useState('');
//   const [negativeSummary, setNegativeSummary] = useState('');
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     // Fetch feedback data from the backend when the component mounts
//     fetch('http://127.0.0.1:8000/comments')
//       .then(response => response.json())
//       .then(data => {
//         setFeedbackData(data);
//       })
//       .catch(error => {
//         console.error('Error fetching feedback data:', error);
//       });
//   }, []);

//   const generatePositiveSummary = () => {
//     setLoading(true);
//     fetch('http://127.0.0.1:8000/commentsp')
//       .then(response => response.json())
//       .then(data => {
//         setPositiveSummary(data.response_p);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error generating positive summary:', error);
//         setLoading(false);
//       });
//   };

//   const generateNegativeSummary = () => {
//     setLoading(true);
//     fetch('http://127.0.0.1:8000/commentsn')
//       .then(response => response.json())
//       .then(data => {
//         setNegativeSummary(data.response_n);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error generating negative summary:', error);
//         setLoading(false);
//       });
//   };

//   return (
//     <div  >
//       <h1>Feedback Page</h1>
//       {feedbackData.length > 0 ? (
//         <table>
//           <thead>
//             <tr>
//               <th>Time</th>
//               <th>Username</th>
//               <th>Feedback</th>
//             </tr>
//           </thead>
//           <tbody>
//             {feedbackData.map(feedback => (
//               <tr key={feedback.id}>
//                 <td>{feedback.timestamp}</td> 
//                 <td>{feedback.username}</td>
//                 <td>{feedback.feedback}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No feedback available.</p>
//       )}
//       <button className="button.positive" onClick={generatePositiveSummary} disabled={loading} >
//         Generate Positive Feedback Summary
//       </button>
//       <button className="button.negative" onClick={generateNegativeSummary} disabled={loading} >
//         Generate Negative Feedback Summary
//       </button>
//       {positiveSummary && (
//         <div>
//           <h2>Positive Feedback Summary</h2>
//           <textarea rows="10" cols="50" value={positiveSummary} readOnly />
//         </div>
//       )}
//       {negativeSummary && (
//         <div>
//           <h2>Negative Feedback Summary</h2>
//           <textarea rows="10" cols="50" value={negativeSummary} readOnly />
//         </div>
//       )}
//     </div>
//   );
// };

// export default FeedbackPage;

import React, { useEffect, useState } from 'react';

const FeedbackPage = () => {
  const [feedbackData, setFeedbackData] = useState([]);
  const [positiveSummary, setPositiveSummary] = useState('');
  const [negativeSummary, setNegativeSummary] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch feedback data from the backend when the component mounts
    fetch('http://127.0.0.1:8000/comments')
      .then(response => response.json())
      .then(data => {
        setFeedbackData(data);
      })
      .catch(error => {
        console.error('Error fetching feedback data:', error);
      });
  }, []);

  const generatePositiveSummary = () => {
    setLoading(true);
    fetch('http://127.0.0.1:8000/commentsp')
      .then(response => response.json())
      .then(data => {
        setPositiveSummary(data.response_p);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error generating positive summary:', error);
        setLoading(false);
      });
  };

  const generateNegativeSummary = () => {
    setLoading(true);
    fetch('http://127.0.0.1:8000/commentsn')
      .then(response => response.json())
      .then(data => {
        setNegativeSummary(data.response_n);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error generating negative summary:', error);
        setLoading(false);
      });
  };

  return (
    <div>
      <h1>Feedback Page</h1>
      {feedbackData.length > 0 ? (
        <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#f5deb3' }}>
          <thead style={{ backgroundColor: '#f0e68c' }}>
            <tr>
              <th style={{ border: '1px solid #dcdcdc', padding: '12px', textAlign: 'left' }}>Time</th>
              <th style={{ border: '1px solid #dcdcdc', padding: '12px', textAlign: 'left' }}>Username</th>
              <th style={{ border: '1px solid #dcdcdc', padding: '12px', textAlign: 'left' }}>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {feedbackData.map(feedback => (
              <tr key={feedback.id}>
                <td style={{ border: '1px solid #dcdcdc', padding: '12px', textAlign: 'left' }}>{feedback.timestamp}</td>
                <td style={{ border: '1px solid #dcdcdc', padding: '12px', textAlign: 'left' }}>{feedback.username}</td>
                <td style={{ border: '1px solid #dcdcdc', padding: '12px', textAlign: 'left' }}>{feedback.feedback}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No feedback available.</p>
      )}
      <button
        onClick={generatePositiveSummary}
        disabled={loading}
        style={{
          padding: '10px 20px',
          margin: '10px',
          border: 'none',
          borderRadius: '25px',
          color: 'white',
          cursor: 'pointer',
          fontSize: '16px',
          backgroundColor: '#2ecc71'
        }}
      >
        Generate Positive Feedback Summary
      </button>
      <button
        onClick={generateNegativeSummary}
        disabled={loading}
        style={{
          padding: '10px 20px',
          margin: '10px',
          border: 'none',
          borderRadius: '25px',
          color: 'white',
          cursor: 'pointer',
          fontSize: '16px',
          backgroundColor: '#e74c3c'
        }}
      >
        Generate Negative Feedback Summary
      </button>
      {positiveSummary && (
        <div>
          <h2>Positive Feedback Summary</h2>
          <textarea rows="10" cols="50" value={positiveSummary} readOnly />
        </div>
      )}
      {negativeSummary && (
        <div>
          <h2>Negative Feedback Summary</h2>
          <textarea rows="10" cols="50" value={negativeSummary} readOnly />
        </div>
      )}
    </div>
  );
};

export default FeedbackPage;
