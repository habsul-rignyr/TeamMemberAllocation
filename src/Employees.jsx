import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';

const Employees = ({employees, selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange}) => {

	
	
	return (
		<main className="container">
		
			<div className="row justify-content-center mt-3 mb-3">
		<div className="col-6">
			<select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
			<option value="Team A">Team A</option>
			<option value="Team B">Team B</option>
			<option value="Team C">Team C</option>
			<option value="Team D">Team D</option>
			</select>
		</div>
		</div>

			
			<div className="row justify-content-center mt-3 mb-3">
				<div className="col-8">
					<div className="card-collection">
			{employees.map((employee) => (
			<div id={employee.id} className={(employee.teamName===selectedTeam?'card m-2 standout':'card m-2')} style={{cursor: "pointer"}} onClick={handleEmployeeCardClick}>

				{
				(employee.gender === "male")? <img src={maleProfile} alt="male" className="card-img-top" /> : <img src={femaleProfile} alt="female" className="card-img-top" />				}
				
				<div className="card-body">
					<h5 className="card-title">Full Name: {employee.fullName}</h5>
					<p className="card-text">Designation: {employee.designation}</p>
			</div>
				</div>
			
			))
			}
				</div>
			</div>
			</div>
		</main>
	)
}

export default Employees;