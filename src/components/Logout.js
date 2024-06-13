import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import './Logout.css'
import { useNavigate } from 'react-router-dom'

const Logout = ()=>{
    const user=useSelector(selectUser);
    const dispatch=useDispatch();
    const handleLogout=(e)=>{
        e.preventDefault();
        dispatch(logout());
    }
    const navigate=useNavigate()

    return (
        <div className='logout'>
            <h1>Welcome <span className="username">{user.name}</span>
            </h1>
            <button className="logout_button" onClick={(e)=>handleLogout(e)}>Logout</button>
            <button className="logout_button" onClick={()=>navigate('table')}>Data</button>
            <br></br>
        </div>
    )
}
export default Logout;