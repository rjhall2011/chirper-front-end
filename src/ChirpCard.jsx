import React from 'react'


const ChirpSyntax= (props) => {
    return(
        <div class="card">
        <div class="card-header">
          {(props.username)}
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>{(props.msg)}</p>
            {/* <footer class="blockquote-footer">{(props.moment().add( D,H,M,YYYY))} <cite title="Source Title">Source Title</cite></footer> */}
          </blockquote>
        </div>
      </div>
    )
}

export default ChirpSyntax;