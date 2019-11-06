import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { Row, Col } from 'antd';
import { loginToM_Pool } from '../services'


const LoginPage = (props) => {
    const [uname, setUname] = useState(null);
    const [pwd,setPwd]=useState(null)
    const history=useHistory()
  
   /*  useEffect(()=>{
       
    }) */

    const login=  ()=>{
        console.log(uname,pwd)
        loginToM_Pool({uname:uname,pswrd:pwd}).then((res)=>{
         localStorage.setItem('userInfo',JSON.stringify(res.data[0]));
         checkLoginPreference(res.data[0])
        

        })
    }

    const checkLoginPreference = (data) => {
        if (!data.USER.FirstLogin) {
            history.push('/home');
        }
        else if (data.USER.FirstLogin) {
            if (data.USER.Pooler_Passanger === "Pooler") {
                history.push('/pooler');
            } else {
                history.push('/passenger');
            }
        }



    }

    return (
        <center>
            <div class="middle">
                <div id="login">
                    <form action="javascript:void(0);" >
                        <fieldset class="clearfix">
                            <p ><span class="fa fa-user"></span><input type="text" onChange={(e)=>setUname(e.target.value)} Placeholder="Username" required /></p>
                            <p><span class="fa fa-lock"></span><input type="password" onChange={(e)=>setPwd(e.target.value)} Placeholder="Password" required /></p>
                            <div>
                                <span style={{ width: "48%", textAlign: "left", display: "inline-block" }}><a class="small-text" href="#">Forgot
                        password?</a></span>
                                <span style={{ width: "50%", textAlign: "right", display: "inline-block" }}><input type="submit" value="Sign In" onClick={(e)=>login()}/></span>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div class="logo">M-POOL</div>
            </div>
        </center>
    )
}

export default LoginPage;