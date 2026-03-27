import { Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
import Copyright from "./Copyright"

const About = () => {
  return (
    <>
<Container maxWidth='md' sx={{
            bgcolor: 'background.paper',
            boxShadow: 2,
            my: 10,
            py:10
        }}>
<div align="center">
  <a href="/">
    <img src="/static/logo.png" alt="Logo" width="80" height="80"/>
  </a>

  <h2 align="center">SettleUp</h2>

  <p align="center">
    Built with the MERN stack (MongoDB, Express, React and NodeJS).
    <br />
    <br/>
    <Copyright/>
  </p>
</div>
<br/>
<Typography variant="h5">
MERN Stack Group Expense Splitting Application
</Typography>
<br/>
<ul style={{marginLeft: '40px'}}>
<li><a href="#introduction">Introduction</a></li>
<li><a href="#key-features">Key Features</a></li>
<li><a href="#technologies-used">Technologies used</a>
<ul style={{marginLeft: '40px'}}>
<li><a href="#frontend">Frontend</a></li>
<li><a href="#backend">Backend</a></li>
<li><a href="#database">Database</a></li>
</ul>
</li>
<li><a href="#license">License</a></li>
</ul>
<br/>
<h2 id="introduction">Introduction</h2>
<br/>
<p>SettleUp is a full stack group expense splitting web application built with the MERN stack (MongoDB, Express, React and Node.js). It is designed to help friend groups, flatmates, and travel groups track shared expenses and settle balances easily. Users can create groups, add expenses, and get detailed analytics including group balances, monthly spend graphs, and category-wise expense charts.</p>
<br/>
<h2 id="key-features">Key Features</h2>
<br/>
<ul style={{marginLeft: '40px'}}>
<li>Create user groups and track group expenses</li>
<li>Keep track of shared expenses and settle balances in a convenient and personalized way</li>
<li>Analytical graphs to understand expenditure trends</li>
<li>Category-wise and monthly expense charts</li>
<li>Multiple user registration and authentication</li>
<li>Authentication using JSON Web Token (JWT)</li>
</ul>
<br/>
<h2 id="technologies-used">Technologies used</h2>
<br/>
<p>This project was created using the following technologies.</p>
<br/>
<h4 id="frontend">Frontend</h4>
<br/>
<ul style={{marginLeft: '40px'}}>
<li>React JS</li>
<li>Redux (for managing and centralizing application state)</li>
<li>Axios (for making API calls)</li>
<li>Material UI (for User Interface)</li>
<li>Chart.js (for analytics graphs)</li>
<li>React-chartjs-2</li>
<li>Gravatar (for user profile picture)</li>
</ul>
<br/>
<h4 id="backend">Backend</h4>
<br/>
<ul style={{marginLeft: '40px'}}>
<li>Express</li>
<li>Mongoose</li>
<li>JWT (for authentication)</li>
<li>bcryptjs (for password encryption)</li>
</ul>
<br/>
<h4 id="database">Database</h4>
<br/>
<ul style={{marginLeft: '40px'}}>
<li>MongoDB (MongoDB Atlas)</li>
</ul>
<br/>
<h2 id="license">License</h2>
<br/>
<p>This project is MIT licensed.</p>
<br/>
<p>Copyright 2026 Fuhar Sagar</p>
<br/>
<p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the &quot;Software&quot;), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>
<br/>
<p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>
<br/>
<p>THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
<br/>
<Copyright/>
<br/>
</Container>
 </>
  )
}

export default About
