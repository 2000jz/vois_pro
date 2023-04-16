import {  useState} from 'react';
import { Bar } from "react-chartjs-2";
import {Chart, registerables} from "chart.js";
import './App.css';
Chart.register(...registerables);

function App() {
  const [report, setReport] = useState(false);
  const [action, setAction] = useState(false);
  const userAction = () => {
    setAction(true);
  }
  const administrator =(e) => {
    if(e.target.value == administrator){
      setReport(true)
    }
  }
  return (


    <>
      {/* <div> */}
      <div className="logo-title">
        <span className="first-title">_VOIS   </span>
        <span className="first-title2"> Shield Alert Management System</span>
      </div>
      <div className="sec-title">
        <p>Jay </p>
      </div>

      <div className="select-1">
        <select onChange={administrator}>
          <option>Reports</option>
          <option value="administrator"> Administrator</option>

        </select>
      </div>
      {!report ? <>
        <nav className="navbar background">
          <ul className="nav-list">


            <li onClick={userAction}>User Action Logs</li>
            <li><a href="#High Risk-User Action Blocked">High Risk-User Action Blocked</a></li>
            <li><a href="#Portable Application Count">Portable Application Count</a></li>
            <li><a href='#Highlight Repeat Instances'>Highlight Repeat Instances</a></li>
            <li><a href='#Alert Category Notification'>Alert Category Notification</a></li>

            <li><a href='#Action Taken on Alert'>Action Taken on Alert</a></li>
            <li><a href='#Exceptional Users'>Exceptional Users</a></li>
            <li><a href='#Removed Portable Application Count'>Removed Portable Application Count</a></li>
            <li><a href='#_VOIS Location Dashboard'>_VOIS Location Dashboard</a></li>
            <li><a href='#False Positive Alarms Dashboard'>False Positive Alarms Dashboard</a></li>
            <li><a href='#Pending Closure Dashboard'>Pending Closure Dashboard</a></li>
            <li><a href='#Service Status'>Service Status</a></li>
            <li><a href='#Machine Profile Log Report'>Machine Profile Log Report</a></li>



          </ul>
          

        </nav>

      </> : ' '}
      {action ? <>
            <div className='bar-graph'>
              <div className='bar-title' >User Action Logs Dashboard</div>
              <section>
                <div className='button-bar'>
                    <span>Operating Center:</span>
                    <select>
                      <option>_VOIS I</option>
                      <option>_VOIS E</option>
                      <option>_VOIS A</option>
                      <option>_VOIS O</option>
                    </select>
                    <span>Location:</span>
                    <select>
                      <option>All</option>
                      <option>pune</option>
                      <option>banglore</option>
                      <option>ahmedabad</option>
                    </select>
                    <button>Filter</button>
                    <button>Clear</button>
                </div>
              </section>
              <div style={{ maxWidth: "650px" }}>
                <Bar
                  data={{
                    labels: ["1st bar", "2nd bar", "3rd bar", "4th bar"],
                    datasets: [
                      {
                        label: "total count/value",
                        data: [1552, 1319, 613, 1400],
                        backgroundColor: ["aqua", "green", "red", "yellow"],
                        borderColor: ["aqua", "green", "red", "yellow"],
                        borderWidth: 0.5,
                      },
                    ],
                  }}
                  height={400}
                  options={{
                    maintainAspectRatio: false,
                    scales: {
                      yAxes: [
                        {
                          ticks: {
                            beginAtZero: true,
                          },
                        },
                      ],
                    },
                    legend: {
                      labels: {
                        fontSize: 15,
                      },
                    },
                  }}
                />
              </div>
            </div>
          </> : ' '}


    </>
  )
}

export default App;
