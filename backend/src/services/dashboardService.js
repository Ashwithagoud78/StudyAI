function getDashboardData() {
  return {
    stats: {
      notesUploaded: 25,
      quizzesTaken: 12,
      studyProgress: '82%',
      aiQuestions: 156
    },
    quickActions: [
      { label: 'Upload Notes', path: '/upload' },
      { label: 'AI Chat', path: '/chat' },
      { label: 'Summary', path: '/summary' },
      { label: 'Quiz', path: '/quiz' }
    ],
    recentNotes: [
      { subject: 'Java Programming', uploaded: 'Today' },
      { subject: 'DBMS', uploaded: 'Yesterday' },
      { subject: 'Operating Systems', uploaded: '2 Days Ago' }
    ],
    recentQuizScores: [
      { quiz: 'Java Basics', score: '18 / 20' },
      { quiz: 'DBMS', score: '16 / 20' },
      { quiz: 'React', score: '19 / 20' }
    ]
  };
}

module.exports = {
  getDashboardData
};
