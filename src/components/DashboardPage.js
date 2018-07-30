import React from 'react';

const DashboardPage = () => (
    
  <div className="container">
  <div className="row">
  <h2>Scheduled Fall Updates</h2>
		<div className="timeline">
            <span className="period period-active">Sept 16</span>  
            <span className="period">Sept 30</span>  
            <span className="period">Oct 18</span>
            <span className="period">Nov 4</span>  
            <span className="period">Nov 18</span>  
            <span className="period">Dec 16</span>  
		</div>
  </div>

  <div className="row">
  <h2>Scheduled Spring Updates</h2>
		<div className="timeline">
            <span className="period">Jan 13</span>  
            <span className="period">Jan 27</span>  
            <span className="period">Feb 10</span>
            <span className="period">Feb 24</span>  
            <span className="period">Mar 10</span>  
            <span className="period">Mar 24</span>  
            <span className="period">Apr 14</span>  
            <span className="period">May 5</span>  
            <span className="period">May 19</span> 
		</div>
  </div>

    

  </div>
);

export default DashboardPage;
