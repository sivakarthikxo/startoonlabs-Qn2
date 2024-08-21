import React from 'react';
import ProfileHeader from './components/ProfileHeader';
import GoalProgress from './components/GoalProgress';
import ContactDetails from './components/ContactDetails';
import MedicalDetails from './components/MedicalDetails';
import './App.css'
import './AllStyles.css'

const App = () => {
  return (
    <div className="container">
      <ProfileHeader />
      <GoalProgress percentage={40} />
      <ContactDetails phone="8022334455" email="meenarabinsachin2@gmail.com" />
      <MedicalDetails />
    </div>
  );
};

export default App;
