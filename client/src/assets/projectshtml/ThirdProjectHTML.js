import React from 'react';

import './projects.css';
import { AiOutlineLink } from 'react-icons/ai';
import { Button } from 'react-bootstrap';

const ThirdProjectHTML = () => {
    return (
        <div className="html-container">

            <div className="button-container-modal">
                <Button className="custom-button text-only-modal" onClick={() => window.open("https://drive.google.com/file/d/1FtdHXHE4VaEmcc1aHR-ecpwvatUnHzYx/view?usp=sharing", "_blank")}>
                    <span>Downlaod Installer</span>
                </Button>
                <Button className="custom-button icon-and-text-modal" onClick={() => window.open("https://github.com/MaizNadeem/Lifestream-WPF.git", "_blank")}>
                    <AiOutlineLink size={20} style={{ marginRight: "10px" }} />
                    <>Go to Source</>
                </Button>
            </div>

            <h2>About</h2>
            <p>
                Lifestream is a blood donation management system designed to streamline blood donation activities and facilitate efficient management of donor information, appointments, and requests. It provides a user-friendly interface for staff members to perform various tasks related to blood donations and ensures smooth coordination between donors, appointments, and blood requests.
            </p>

            <h2>Documentation</h2>
            <p>
                Detailed documentation for the Lifestream - Blood Bank System can be found <a href="https://github.com/MaizNadeem/Lifestream-WPF/blob/master/Documentation.pdf">here</a>.
            </p>

            <h2>Installation Instructions</h2>
            <ol>
                <li>Download the installation file by clicking on the following link: <a href="https://drive.google.com/file/d/1FtdHXHE4VaEmcc1aHR-ecpwvatUnHzYx/view?usp=sharing">Download Lifestream Installer</a></li>
                <li>Once the download is complete, locate the downloaded file named <code>Install.rar</code>.</li>
                <li>Extract the contents of the <code>Install.rar</code> file to a desired location on your computer.</li>
                <li>Open the extracted folder and navigate to the "Install" folder.</li>
                <li>Inside the "Install" folder, you will find a file named <code>setup.exe</code>. Double-click on it to run the setup.</li>
                <li>Follow the on-screen instructions provided by the setup wizard to proceed with the installation. You may need to accept the terms and conditions, choose the installation directory, and select any additional settings as required.</li>
                <li>Once the installation process is complete, the Lifestream application will be downloaded and installed on your computer.</li>
            </ol>

            <p><strong>To uninstall Lifestream:</strong></p>
            <ol>
                <li>Go to the "Apps & features" settings on your computer. You can access this by searching for "Apps & features" in the Windows search bar or by going to the Control Panel and selecting "Uninstall a program" (Windows 7).</li>
                <li>In the list of installed applications, locate "Lifestream" and click on it.</li>
                <li>Click on the "Uninstall" button and follow any prompts or instructions provided to complete the uninstallation process.</li>
            </ol>
            
            <p>By following these instructions, you should be able to install and uninstall Lifestream on your computer.</p>

            <h2>Screenshots</h2>
            <p>Here are some screenshots of the Lifestream - Blood Bank System:</p>
            
            <h3>Login Screen</h3>
            <div className='login-screen'>
                <img src="https://github.com/MaizNadeem/Lifestream-WPF/blob/master/Frontend%20Screenshots/Login.png?raw=true" alt="Login Screen" width="70%" />
            </div>

            <h3>Main View</h3>
            <div className='main-screen'>
                <img src="https://github.com/MaizNadeem/Lifestream-WPF/blob/master/Frontend%20Screenshots/Dashboard.png?raw=true" alt="Main View" />
            </div>

            <h3>Other Views</h3>
            <div className='other-views'>
                <img src="https://github.com/MaizNadeem/Lifestream-WPF/blob/master/Frontend%20Screenshots/View%20Donors.png?raw=true" alt="Donor View" />
                <img src="https://github.com/MaizNadeem/Lifestream-WPF/blob/master/Frontend%20Screenshots/View%20Staff.png?raw=true" alt="Staff View" />
                <img src="https://github.com/MaizNadeem/Lifestream-WPF/blob/master/Frontend%20Screenshots/Staff's%20Info.png?raw=true" alt="Staff Info View" />
            </div>

            <p>You can find all the application screenshots <a href="https://github.com/MaizNadeem/Lifestream-WPF/tree/master/Frontend%20Screenshots">here</a>.</p>

            <h2>Entity Relationship Diagram (ERD)</h2>
            <div className='erd'>
                <img src="https://github.com/MaizNadeem/Lifestream-WPF/blob/master/Frontend%20Screenshots/ERD.png?raw=true" alt="ERD" />
            </div>
            <p>The ERD illustrates the logical structure and relationships between the entities (tables) in the Lifestream - Blood Bank System's database.</p>

            <h2>Technologies Used</h2>
            <p>
                The Lifestream - Blood Bank System is built using the following technologies:
            </p>
            <ul>
                <li><strong>.NET Framework 4.8:</strong> The application is developed using the .NET Framework 4.8, which provides a robust and stable development platform for Windows applications.</li>
                <li><strong>WPF (Windows Presentation Foundation):</strong> The user interface is built using WPF, a powerful framework for creating desktop applications with rich UI and interactive user experiences.</li>
                <li><strong>MSSQL Server / Azure Database:</strong> The application uses either Microsoft SQL Server or Azure Database as the backend database to store and manage donor information, appointments, and requests.</li>
                <li><strong>NuGet Packages:</strong>
                    <ul>
                        <li><strong>Lepoco:</strong> Used for UI design and controls, providing a modern and visually appealing user interface.</li>
                        <li><strong>LiveCharts.Wpf:</strong> Used for creating interactive and dynamic charts to visualize blood donation data.</li>
                        <li><strong>FontAwesome.Sharp:</strong> Used to incorporate a wide range of icons and fonts into the application for enhanced visual elements.</li>
                    </ul>
                </li>
            </ul>

            <h2>Deployment Instructions</h2>
            <p>
                To deploy the Lifestream - Blood Bank System on your own Windows machine, follow these steps:
            </p>
            <ol>
                <li>Download the source code from the <a href="https://github.com/MaizNadeem/Lifestream-WPF">GitHub repository</a>.</li>
                <li>Ensure that you have the following dependencies installed:
                    <ul>
                        <li>Visual Studio (2019 or later) with .NET Framework 4.8 development tools.</li>
                        <li>.NET Framework 4.8 runtime.</li>
                        <li>Azure Cloud account with Azure Data Studio (or SQL Server Management Studio - SSMS) installed.</li>
                    </ul>
                </li>
                <li>Open the project in Visual Studio.</li>
                <li>Update the connection string in the <code>RepositoryBase.cs</code> file located at <code>Lifestream-WPF/Repositories/RepositoryBase.cs</code>. Replace <code>"AZURE_CONNECTION_STRING"</code> with your own connection string.</li>
                <li>Build the solution to restore NuGet packages and compile the project.</li>
                <li>Publish the project using Visual Studio to create the executable files.</li>
                <li>Copy the published files to the target machine.</li>
                <li>Install .NET Framework 4.8 runtime on the target machine if it's not already installed.</li>
                <li>Run the executable file to start the Lifestream - Blood Bank System.</li>
            </ol>

            <h2>Database Setup</h2>
            <p>
                To set up the database for the Lifestream - Blood Bank System, follow these steps:
            </p>
            <ol>
                <li>Download the <a href="https://github.com/MaizNadeem/Lifestream-WPF/blob/master/BloodBank.bacpac">BloodBank.bacpac</a> file from the GitHub repository.</li>
                <li>Open Azure Data Studio or SQL Server Management Studio (SSMS).</li>
                <li>Connect to your Azure Database or local MSSQL Server.</li>
                <li>Right-click on the Databases folder and choose "Import Data-tier Application."</li>
                <li>Select the downloaded BloodBank.bacpac file and follow the import wizard to restore the database.</li>
                <li>Once the database is restored, update the connection string in the <code>RepositoryBase.cs</code> file of the application to point to the newly restored database.</li>
            </ol>

            <h2>Additional Notes</h2>
            <ul>
                <li>Make sure to have Visual Studio (2019 or later) and .NET Framework 4.8 installed on your machine before proceeding with the deployment.</li>
                <li>The <code>BloodBank.bacpac</code> file contains the pre-configured database schema for the Lifestream - Blood Bank System. You can use it to quickly set up the database.</li>
                <li>For any issues or questions, please refer to the project's <a href="https://github.com/MaizNadeem/Lifestream-WPF">GitHub repository</a> or contact the project owner.</li>
            </ul>

            <hr />

            <h4 align="center">© M. Maiz Nadeem</h4>
        </div>
    );
}

export default ThirdProjectHTML;
