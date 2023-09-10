import {Link} from "react-router-dom";

export const LibraryServices = () => {
    return (
        <div className='container my-5'>
            <div className='row p-4 align-items-center border shadow-lg'>
                <div className='col-lg-7 p-3'>
                    <h1 className='display-4 fw-bold'>
                        Cant' find what you are looking for?
                    </h1>
                    <p className='lead'>
                        If you cannot find what you are looking for,
                        send a personal message to our library admin team.
                    </p>
                    <div className='d-grid gap-2 justify-content-md-start mb-4 mb-lg-3'>
                        <Link to="#" className='btn main-color btn-lg text-white'>
                            Sign up
                        </Link>
                    </div>
                </div>
                <div className='col-lg-4 offset-lg-1 shadow-lg lost-image'>

                </div>
            </div>
        </div>
    );
}