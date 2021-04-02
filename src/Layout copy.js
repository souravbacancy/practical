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
            <div className="page-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col title-col">
                            <h1 className="h1 form-group">SpaceX launch Programs</h1>
                        </div>
                    </div>
                    <div className="row row-sm">
                        <div className="col-lg filter-col">
                            <div className="card">
                                <h3 className="h3 filter-title">Filters</h3>
                                <div className="group-block">
                                    <p className="text-md category-item">Launch Year</p>
                                    <div className="row row-sm">
                                        <div className="col-6 form-group">
                                            <button className={`btn btn-success btn-block filter-btn ${launchYear === '2006' ? 'active' : ''}`} onClick={() => filterData('year', '2006')}>2006</button>
                                        </div>
                                        <div className="col-6 form-group">
                                            <button className={`btn btn-success btn-block filter-btn ${launchYear === '2007' ? 'active' : ''}`} onClick={() => filterData('year', '2007')}>2007</button>
                                        </div>
                                        <div className="col-6 form-group">
                                            <button className={`btn btn-success btn-block filter-btn ${launchYear === '2008' ? 'active' : ''}`} onClick={() => filterData('year', '2008')}>2008</button>
                                        </div>
                                        <div className="col-6 form-group">
                                            <button className={`btn btn-success btn-block filter-btn ${launchYear === '2009' ? 'active' : ''}`} onClick={() => filterData('year', '2009')}>2009</button>
                                        </div>
                                        <div className="col-6 form-group">
                                            <button className={`btn btn-success btn-block filter-btn ${launchYear === '2010' ? 'active' : ''}`} onClick={() => filterData('year', '2010')}>2010</button>
                                        </div>
                                        <div className="col-6 form-group">
                                            <button className={`btn btn-success btn-block filter-btn ${launchYear === '2011' ? 'active' : ''}`} onClick={() => filterData('year', '2011')}>2011</button>
                                        </div>
                                        <div className="col-6 form-group">
                                            <button className={`btn btn-success btn-block filter-btn ${launchYear === '2012' ? 'active' : ''}`} onClick={() => filterData('year', '2012')}>2012</button>
                                        </div>
                                        <div className="col-6 form-group">
                                            <button className={`btn btn-success btn-block filter-btn ${launchYear === '2013' ? 'active' : ''}`} onClick={() => filterData('year', '2013')}>2013</button>
                                        </div>
                                        <div className="col-6 form-group">
                                            <button className={`btn btn-success btn-block filter-btn ${launchYear === '2014' ? 'active' : ''}`} onClick={() => filterData('year', '2014')}>2014</button>
                                        </div>
                                        <div className="col-6 form-group">
                                            <button className={`btn btn-success btn-block filter-btn ${launchYear === '2015' ? 'active' : ''}`} onClick={() => filterData('year', '2015')}>2015</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="group-block">
                                    <p className="text-md category-item">Successful Launch</p>
                                    <div className="row row-sm">
                                        <div className="col-6 form-group">
                                            <button className={`btn btn-success btn-block filter-btn ${launchSuccess === true ? 'active' : ''}`} onClick={() => filterData('launch', true)}>True</button>
                                        </div>
                                        <div className="col-6 form-group">
                                            <button className={`btn btn-success btn-block filter-btn ${launchSuccess === false ? 'active' : ''}`} onClick={() => filterData('launch', false)}>False</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="group-block">
                                    <p className="text-md category-item">Successful Landing</p>
                                    <div className="row row-sm">
                                        <div className="col-6 form-group">
                                            <button className={`btn btn-success btn-block filter-btn ${landSuccess === true ? 'active' : ''}`} onClick={() => filterData('land', true)}>True</button>
                                        </div>
                                        <div className="col-6 form-group">
                                            <button className={`btn btn-success btn-block filter-btn ${landSuccess === false ? 'active' : ''}`} onClick={() => filterData('land', false)}>False</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg">
                            <div className="row row-sm">
                                {flightList.map((flight, key) =>
                                    <div className="col-sm-6 col-lg-4 col-xl-3 product-list-col" key={`${flight.mission_name}.${key}`}>
                                        <div className="card card-upgrade">
                                            <div className="card-img">
                                                <img src={flight.links.mission_patch} alt="" className="img" />
                                            </div>
                                            <div className="card-detail">
                                                <h4 className="h4 title">{`${flight.mission_name} #${flight.flight_number}`}</h4>
                                                <p className="text-desc">Mission Ids:{flight.mission_id.map((mission, index) =>
                                                    <li key={`${flight.mission_name}.${mission}.${index}`}><span className="ans">{mission}</span></li>
                                                )}</p>
                                                <p className="text-desc">Launch Year:<span className="ans">{flight.launch_year}</span></p>
                                                <p className="text-desc">Successful Launch:<span className="ans">{flight.launch_success ? 'true' : 'false'}</span></p>
                                                <p className="text-desc">Successful Landing:<span className="ans">{flight.launch_landing}</span></p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Layout;