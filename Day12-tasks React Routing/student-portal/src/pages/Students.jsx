
function Students() {
  const student = {
    name: 'Sakshi Hanmant Shinde',
    qualification: 'Post Graduation in Computer Applications',
    careerGoal: 'Java Full Stack Developer',
    project: 'React Router Student Portal',
  };

  return (
    <section className="page-card">
      <span className="eyebrow">MY PROFILE</span>

      <h1>Student Profile</h1>

      <div className="profile-card">
        <div className="profile-avatar">S</div>

        <h2>{student.name}</h2>

        <p className="profile-role">{student.careerGoal}</p>

        <div className="profile-details">
          <div>
            <span>Qualification</span>
            <strong>{student.qualification}</strong>
          </div>

          <div>
            <span>Current Practical</span>
            <strong>{student.project}</strong>
          </div>

          <div>
            <span>Learning Focus</span>
            <strong>React and React Router</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Students;
