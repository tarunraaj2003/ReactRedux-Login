import { useSelector,useDispatch } from 'react-redux';
import { remove, selectValues } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';

function Table(){
    const values=useSelector(selectValues);
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const rows = values.map((val,index)=>{
    return (
    <tr key={index}>
      <td>{val.name}</td>
      <td>{val.email}</td>
      <td>{val.password}</td>
      <td>
        <button className="del_button" onClick={()=>dispatch(remove(index))}>Delete</button>
      </td>
    </tr>
    )
 })
 return ( 
    <div className="logout">
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Remove</th>
            </tr>
        </thead>
        <tbody>
            {rows}
            </tbody>
            </table>
            <button className="logout_button" onClick={()=>navigate(-1)}>Back</button>
            
    </div>
    )
 
}
export default Table;