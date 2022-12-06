import React from 'react'

export default function Login() {
    return (
        <div className="w-25 p-3 m-auto" >

            <form className='container-sm column align-item-center'   >
                <div class=" row align-item-center"  >
                    <label for="exampleInputEmail1" class="col-form-label col-auto"   >Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    
                </div>
                <div class="">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class=" form-check ">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Remember Me </label>
                    <label className="form-check-label mr-6" for="exampleCheck1">Forget Password </label>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
        </div>
    )
}
