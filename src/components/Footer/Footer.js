import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="pt-4 pt-md-5 border-top ">
                <div className="row">
                    <div className="col-6 col-md">
                        <h5 className='text-info'>Features</h5>
                        <ul className=" text-small list-unstyled">
                            <li><a className="text-muted text-decoration-none" href="#">Cool stuff</a></li>
                            <li><a className="text-muted text-decoration-none" href="#">Random feature</a></li>
                            <li><a className="text-muted text-decoration-none" href="#">Team feature</a></li>
                            <li><a className="text-muted text-decoration-none" href="#">Stuff for developers</a></li>
                            <li><a className="text-muted text-decoration-none" href="#">Another one</a></li>
                            <li><a className="text-muted text-decoration-none" href="#">Last time</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5 className='text-info'>Resources</h5>
                        <ul className="text-decoration-none text-small list-unstyled">
                            <li><a className="text-muted text-decoration-none" href="#">Resource</a></li>
                            <li><a className="text-muted text-decoration-none" href="#">Resource name</a></li>
                            <li><a className="text-muted text-decoration-none" href="#">Another resource</a></li>
                            <li><a className="text-muted text-decoration-none" href="#">Final resource</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5 className='text-info'>About</h5>
                        <ul className="text-decoration-none text-small list-unstyled">
                            <li className=''><a className="text-muted text-decoration-none" href="#">Team</a></li>
                            <li ><a className="text-muted text-decoration-none" href="#">Locations</a></li>
                            <li ><a className="text-muted text-decoration-none" href="#">Privacy</a></li>
                            <li ><a className="text-muted text-decoration-none" href="#">Terms</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}
