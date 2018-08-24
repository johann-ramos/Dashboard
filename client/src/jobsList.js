import React, { Component } from 'react'
import Menu from './menu';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Container, Dimmer, Loader } from 'semantic-ui-react'



class JobsList extends Component {

  constructor () {
    super()
    this.state = {}
    this.getJobs = this.getJobs.bind(this)
    this.getJob = this.getJob.bind(this)
    this.toggle = this.toggle.bind(this)
    this.testMethod = this.testMethod.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  componentDidMount () {
    this.getJobs()
  }

  fetch (endpoint) {
    return window.fetch(endpoint)
      .then(response => response.json())
      .catch(error => console.log(error))
  }


  getJob (jobName) {
    this.fetch(`/api/resultados/${jobName}`)
      .then(job => this.setState({job: job}))
  }

  getJobs() {
    this.fetch('/api/resultados')
      .then(jobs => {
        if (jobs.length) {
          this.setState({jobs: jobs})
          this.getJob(jobs[0].id)
        } else {
          this.setState({jobs: []})
        }
      })
  }


  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  testMethod(){
  	this.fetch('/api/resultados')
      .then(jobs => {
        if (jobs.length) {
          this.setState({jobs: jobs})
          this.getJob(jobs[0].id)
        } else {
          this.setState({jobs: []})
        }
      })
  }

  render() {

    let {jobs, job} = this.state
    return job
    ?
    <div>
    <Menu />
    <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Jobs
        </DropdownToggle>
        <DropdownMenu>
			<DropdownItem>{this.getJob("DDLL")}</DropdownItem>

        </DropdownMenu>
      </ButtonDropdown>
      </div>
      : <Container text>
        <Dimmer active inverted>
          <Loader content='Loading' />
        </Dimmer>
      </Container>
    
  }
}

export default JobsList;
