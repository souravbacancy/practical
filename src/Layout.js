import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ENDPOINT = `https://api.spacexdata.com/v3/launches?limit=100`;

const Layout = () => {
    const [flightList, setFlightList] = useState([]);
    const [launchYear, setLaunchYear] = useState('0');
    const [launchSuccess, setLaunchSuccess] = useState(null);
    const [landSuccess, setLandSuccess] = useState(null);

    useEffect(() => {
        axios.get(`${ENDPOINT}${landSuccess ? '&land_success=' + landSuccess : ''}${launchSuccess ? '&launch_success=' + launchSuccess : ''}${launchYear !== '0' ? '&launch_year=' + launchYear : ''}`)
            .then(response => {
                setFlightList(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [launchYear, launchSuccess, landSuccess]);

    const filterData = (type, value) => {
        if (type === 'launch') {
            setLaunchSuccess(value);
        } else if (type === 'land') {
            setLandSuccess(value);
        } else {
            setLaunchYear(value);
        }
    }

    return (
        <React.Fragment>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="my-3">SpaceX Launch Programs</h1>
                        </div>
                        <div className="row m-0 p-0">
                            <div className="col-12 col-md-3 col-xl-2 mb-4">
                                <div className="bg-white p-3 rounded-2">
                                    <h2>Filters</h2>
                                    <p className="text-center">Launch Year</p>
                                    <hr />
                                    <div className="row g-4 px-2 px-xl-3">
                                        <div className="col-6">
                                            <button type="button" className={`btn btn-primary btn-sm w-100 ${launchYear === '2006' ? 'active' : ''}`} onClick={() => filterData('year', '2006')}>2006</button>
                                        </div>
                                        <div className="col-6">
                                            <button type="button" className={`btn btn-primary btn-sm w-100 ${launchYear === '2007' ? 'active' : ''}`} onClick={() => filterData('year', '2007')}>2007</button>
                                        </div>
                                        <div className="col-6">
                                            <button type="button" className={`btn btn-primary btn-sm w-100 ${launchYear === '2008' ? 'active' : ''}`} onClick={() => filterData('year', '2008')}>2008</button>
                                        </div>
                                        <div className="col-6">
                                            <button type="button" className={`btn btn-primary btn-sm w-100 ${launchYear === '2009' ? 'active' : ''}`} onClick={() => filterData('year', '2009')}>2009</button>
                                        </div>
                                        <div className="col-6">
                                            <button type="button" className={`btn btn-primary btn-sm w-100 ${launchYear === '2010' ? 'active' : ''}`} onClick={() => filterData('year', '2010')}>2010</button>
                                        </div>
                                        <div className="col-6">
                                            <button type="button" className={`btn btn-primary btn-sm w-100 ${launchYear === '2011' ? 'active' : ''}`} onClick={() => filterData('year', '2011')}>2011</button>
                                        </div>
                                        <div className="col-6">
                                            <button type="button" className={`btn btn-primary btn-sm w-100 ${launchYear === '2012' ? 'active' : ''}`} onClick={() => filterData('year', '2012')}>2012</button>
                                        </div>
                                        <div className="col-6">
                                            <button type="button" className={`btn btn-primary btn-sm w-100 ${launchYear === '2013' ? 'active' : ''}`} onClick={() => filterData('year', '2013')}>2013</button>
                                        </div>
                                        <div className="col-6">
                                            <button type="button" className={`btn btn-primary btn-sm w-100 ${launchYear === '2014' ? 'active' : ''}`} onClick={() => filterData('year', '2014')}>2014</button>
                                        </div>
                                        <div className="col-6">
                                            <button type="button" className={`btn btn-primary btn-sm w-100 ${launchYear === '2015' ? 'active' : ''}`} onClick={() => filterData('year', '2015')}>2015</button>
                                        </div>
                                        <div className="col-6">
                                            <button type="button" className={`btn btn-primary btn-sm w-100 ${launchYear === '2016' ? 'active' : ''}`} onClick={() => filterData('year', '2016')}>2016</button>
                                        </div>
                                        <div className="col-6">
                                            <button type="button" className={`btn btn-primary btn-sm w-100 ${launchYear === '2017' ? 'active' : ''}`} onClick={() => filterData('year', '2017')}>2017</button>
                                        </div>
                                        <div className="col-6">
                                            <button type="button" className={`btn btn-primary btn-sm w-100 ${launchYear === '2018' ? 'active' : ''}`} onClick={() => filterData('year', '2018')}>2018</button>
                                        </div>
                                        <div className="col-6">
                                            <button type="button" className={`btn btn-primary btn-sm w-100 ${launchYear === '2019' ? 'active' : ''}`} onClick={() => filterData('year', '2019')}>2019</button>
                                        </div>
                                        <div className="col-6">
                                            <button type="button" className={`btn btn-primary btn-sm w-100 ${launchYear === '2020' ? 'active' : ''}`} onClick={() => filterData('year', '2020')}>2020</button>
                                        </div>
                                    </div>
                                    <p className="text-center mt-4">Successful Launch</p>
                                    <hr />
                                    <div className="row g-4 px-2 px-xl-3">
                                        <div className="col-6">
                                            <button className={`btn btn-primary btn-sm w-100 ${launchSuccess === true ? 'active' : ''}`} onClick={() => filterData('launch', true)}>True</button>
                                        </div>
                                        <div className="col-6">
                                            <button className={`btn btn-primary btn-sm w-100 ${launchSuccess === false ? 'active' : ''}`} onClick={() => filterData('launch', false)}>False</button>
                                        </div>
                                    </div>
                                    <p className="text-decoration-underline text-center mt-4"> Successful Landing</p>
                                    <div className="row g-4 px-2 px-xl-3 mb-5">
                                        <div className="col-6">
                                            <button className={`btn btn-primary btn-sm w-100 ${landSuccess === true ? 'active' : ''}`} onClick={() => filterData('land', true)}>True</button>
                                        </div>
                                        <div className="col-6">
                                            <button className={`btn btn-primary btn-sm w-100 ${landSuccess === false ? 'active' : ''}`} onClick={() => filterData('land', false)}>False</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-9 col-xl-10">
                                <div className="row g-4">
                                    {flightList.map((flight, key) =>
                                        <div className="col-12 col-md-6 col-xl-3 boxed" key={`${flight.mission_name}.${key}`}>
                                            <div className="bg-white p-3 rounded-2 boxed__card">
                                                <img src={flight.links.mission_patch} alt="image" className="w-100 boxed__card-img" />
                                                <h3 className="text-primary mt-3">{`${flight.mission_name} #${flight.flight_number}`}</h3>
                                                <h3 className="mt-2">Mission Ids:{flight.mission_id.map((mission, index) =>
                                                    <li key={`${flight.mission_name}.${mission}.${index}`}><span className="ans">{mission}</span></li>
                                                )}</h3>
                                                <ul className="text-primary">
                                                    <li>list mission Ids</li>
                                                </ul>
                                                <h3 className="mt-2">Launch Year: <span
                                                    className="fw-normal text-primary">{flight.launch_year}</span></h3>
                                                <h3 className="mt-2">Successful Launch: <span
                                                    className="fw-normal text-primary">{flight.launch_success ? 'true' : 'false'}</span>
                                                </h3>
                                                <div className="d-flex flex-wrap mt-2">
                                                    <h3>Successful Landing: </h3>
                                                    <h3 className="fw-normal text-primary"> {flight.launch_landing ? 'true' : 'false'}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex justify-content-center flex-column flex-md-row align-items-center my-5">
                                <h2>Developed by:</h2>
                                <h2 className="fw-normal">developer name</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Layout;