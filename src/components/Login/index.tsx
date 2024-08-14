import React from 'react';
import "./style.scss";
import { useForm } from "react-hook-form";
import classNames from 'classnames';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const LoginPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const theme = useTheme();
  const isTabnet = useMediaQuery(theme.breakpoints.down(800));


  const onSubmit = async (data: any) => {
    console.log("data", data)
  }

  return (
    <div className={classNames('login-page', isTabnet ? 'login-page-tabnet' : "")}>
      <div className={classNames('block-1', isTabnet ? 'block-1-tabnet' : "")}>
        <img src="https://demo5.cybersoft.edu.vn/static/media/signin.6f1c72291c1ec0817ded.jpg" />
      </div>

      <div className={classNames('block-2', isTabnet ? 'block-2-tabnet' : "")}>
        <h3 className={classNames('title-sign-in', isTabnet ? 'title-sign-in-tabnet' : "")}> Sign In to Fiverr</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-login'>
            <div className='text-email'>
              <div className='text-email-child'>
                <PersonIcon />
                <input
                  placeholder="Vui lòng điền email vào đây..."
                  className={classNames("email", errors.email ? "email-error" : "")}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Email is not valid'
                    }
                  })}
                />
              </div>
              {errors.email && <p className='error'>{String(errors.email.message)}</p>}
            </div>

            <div className='text-password'>
              <div className='text-password-child'>
                <EnhancedEncryptionIcon />
                <input
                  placeholder="Vui lòng điền mật khẩu vào đây..."
                  className='password'
                  type='password'
                  {...register('password', { required: 'Password is required' })}
                />
              </div>
              {errors.password && <p className='error'>{String(errors.password.message)}</p>}
            </div>
            <div className="button-authen">
              <button className='btn-login' type="submit"> Login</button>
              <button onClick={() => navigate("/register")} className='btn-register'>Register now?</button>
            </div>
          </div>
        </form>

      </div>
    </div>
  )
}

export default LoginPage