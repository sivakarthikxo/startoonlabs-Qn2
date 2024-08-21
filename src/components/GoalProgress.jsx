import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function GoalProgress({ percentage }) {
    return (
        <>
            <div className="goal-progress">
                <h2>Goal Reached</h2>
                <div className="progress-container">
                    <CircularProgressbar value={percentage} text={`${percentage}%`} />
                </div>
                <div className="goal-metrics">
                    <p>EMG: -</p>
                    <p>ROM: -</p>
                </div>
            </div>
        </>
    )
}

export default GoalProgress
