import React from 'react'
import logo from './image/money.png'
import dollar from './image/dollar.png'
import man from './image/man.png'
import dollar2 from './image/dollar2.png'
import graph from './image/bar-chart.png'
import user from './image/audience.png'
import value from './image/graph.png'
import map from './image/worldmap.png'

function Project() {
    return (
        <div>
            {/* Header */}
            <div className='row'>
                <div class="col-md-6">
                    <div className='header'>
                    <div class="d-flex justify-content-left align-items-left m-3 p-3">
                        <h1 className='text-left'>Vids<img src={logo} className='logo' alt='' width={40} height={40} />Pay</h1><br />
                    </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="d-flex justify-content-left align-items-left m-3 p-3">
                        <a><img src={man} className='logo' alt='' width={50} height={50} /></a>
                    </div>
                </div>
                <div className='col-4'>
                <div class="d-flex justify-content-left align-items-left m-3 p-3">
                    <h2><img src={dollar} className='logo' alt='' width={50} height={50} /></h2>&nbsp;&nbsp;
                    <h3>Monetization<hr/></h3>
                    </div>
                </div>
                <div>
                </div>
            </div>
            {/* Card */}
            <div className='row '>
                <div class="card1" >
                    <div class="card-body ">
                        <h1 class="card-title"><img src={dollar2} className='logo' alt='' width={50} height={45} />1.7k</h1>
                        <h6 class="card-subtitle mb-2 text-muted">Estimated Earning</h6>
                        <p class="card-text">Last 1 month</p>
                    </div>
                </div>
                <div class="card2" >
                    <div class="card-body">
                        <h3 class="text-left"><img src={dollar2} className='logo' alt='' width={45} height={45} />302.50</h3>
                        <h6 class="card-subtitle mb-2 text-muted">Estimated Earning</h6>
                        <p class="card-text">Last 7 days</p>
                    </div>
                </div>
                <div class="card3 " >
                    <div class="card-body">
                        <h1 class="card-title">389.34K</h1>
                        <h6 class="card-subtitle mb-2 text-muted">Total Likes</h6>
                        <p class="card-text">Last 1 month</p>
                    </div>
                </div>
                <div class="card4" >

                    <div class="card-body">
                        <h1 class="card-title">23</h1>
                        <h6 class="card-subtitle mb-2 text-muted">Total Posts</h6>
                        <p class="card-text">Last 1 month</p>
                    </div>
                </div>
                {/* <div class="card5" >
                    <div class="card-body ">
                        <h1 class="card-title"><img src={dollar2} className='logo' alt='' width={45} height={45} />23.7k</h1>
                        <h6 class="card-subtitle mb-2 text-muted">Withdreaw Amount Earning</h6>
                        <p class="card-text">Last 6 months</p>
                    </div>
                </div> */}
            </div>
            {/* Footer */}
            <div className='row'>
                <div class="col-8">
                    <div class="d-flex justify-content-left align-items-left m-3 p-3">
                        <h3 className='text-left'><img src={graph} className='logo' alt='' width={40} height={40} /></h3>&nbsp;&nbsp;
                        <h2>Insights<hr /></h2>
                    </div>
                    <div className='col-2'>
                        <img src={value} className='logo' alt='' width={500} height={500} />
                    </div>
                </div>
                <div class="col-2">
                    <div class="d-flex justify-content-left align-items-left m-3 p-3">
                        <h2><img src={user} className='logo' alt='' width={50} height={50} /></h2>&nbsp;&nbsp;
                        <h2> Audience<hr /></h2>
                    </div>
                    <div className='col-2'>
                        <img src={map} className='logo' alt='' width={500} height={500} />
                    </div>
                </div>

            </div>
        </div>


    )
}

export default Project