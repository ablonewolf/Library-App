export const Footer = () => {
    return (
        <div className='main-color'>
            <footer className='container d-flex flex-wrap justify-content-center
                                align-items-center py-5 main-color'>
                <p className='col-md-4 mb-0 text-white'>
                    @Online Library App, Inc
                </p>
                <ul className='nav navbar-dark col-md-4 justify-content-end'>
                    <li className='nav-item'>
                        <a href="/home" className='nav-link px-2 text-white'>
                            Home
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href="/search" className='nav-link px-2 text-white'>
                            Search Books
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}