import React, { Component } from 'react'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment} from 'semantic-ui-react'
import { BrowserRouter, Route, Router, NavLink , Switch, Link } from 'react-router-dom';

const FixedMenuLayout = () => (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Image
            size='mini'
            src='/logo.png'
            style={{ marginRight: '1.5em', width:'80px' }}
          />
          Project Managment Tool
        </Menu.Item>
        <Menu.Item as='a' linkButton={true} href="link/to/some/page" primaryText="Home">Home</Menu.Item>

         <DropdownTeamList/>
         <DropdownQuarter/>
         <DropdownProjectList/>

       
      </Container>
    </Menu>

    <Container style={{ marginTop: '5em'}}>
      <Header as='h1'>Project Managment Tool</Header>
      <SprintMenu/>

      <Image src='/assets/images/wireframe/media-paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/assets/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/assets/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/assets/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/assets/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/assets/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/assets/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
    </Container>

    <Segment
      inverted
      vertical
      style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
    >
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Usefull Links' />
              <List link inverted>
                <List.Item as='a' linkButton={true} href="https://jira.equifax.com" primaryText="Home">Jira</List.Item>
                <List.Item as='a' linkButton={true} href="http://acspplc9a032.app.c9.equifax.com:8080/jenkins/" primaryText="Home">Jenkins</List.Item>
                <List.Item as='a' linkButton={true} href="http://sdlc.devcentral.equifax.com/fisheye/cru/home" primaryText="Home">Fish Eye</List.Item>
                <List.Item as='a' linkButton={true} href="https://confluence.equifax.com" primaryText="Home">Confluence</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Group 2' />
              <List link inverted>
                <List.Item as='a'>Link One</List.Item>
                <List.Item as='a'>Link Two</List.Item>
                <List.Item as='a'>Link Three</List.Item>
                <List.Item as='a'>Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Group 3' />
              <List link inverted>
                <List.Item as='a'>Link One</List.Item>
                <List.Item as='a'>Link Two</List.Item>
                <List.Item as='a'>Link Three</List.Item>
                <List.Item as='a'>Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Footer Header' />
              <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Divider inverted section />
        <Image
          centered
          size='mini'
          src='/logo.png'
        />
        <List horizontal inverted divided link>
          <List.Item as='a' href='#'>Site Map</List.Item>
          <List.Item as='a' href='#'>Contact Us</List.Item>
          <List.Item as='a' href='#'>Terms and Conditions</List.Item>
          <List.Item as='a' href='#'>Privacy Policy</List.Item>
        </List>
      </Container>
    </Segment>
  </div>
)

          var teamOptions = [ {key: '1', value: 'init', text: 'SDC Teams'},
                                  {key: '2', value: 'team1', text: 'WorkForceSolutions'}]

 
        const DropdownTeamList = () => (
  <Dropdown placeholder='SDC Teams' item simple options={teamOptions} />
)


var projectOptions = [ {key: '1', value: 'init', text: 'Project List'},
                                  {key: '2', value: 'project1', text: 'CEP 2.0'}]

 
        const DropdownProjectList = () => (
  <Dropdown placeholder='Project List' item simple options={projectOptions} />
)

          var quarterOptions = [  {key: '0', value: 'select', text: 'Select Quarter'},
                                  {key: '1', value: 'q1', text: 'Q1'},
                                  {key: '2', value: 'q2', text: 'Q2'},
                                  {key: '3', value: 'q3', text: 'Q3'},
                                  {key: '4', value: 'q4', text: 'Q4'}]

 
        const DropdownQuarter = () => (
  <Dropdown placeholder='Select Quarter' item simple options={quarterOptions} />
)

class SprintMenu extends Component {
  
    constructor(props) {

    super(props);

    this.state = { activeItem: 'Sprint 1' }

    this.handleItemClick = (e, { name }) => 
     
      this.setState({ activeItem: name });
      

  }

  render() {
    const { activeItem } = this.state

    return (
      <Grid width={16}>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item name='Sprint 1' active={activeItem === 'Sprint 1'} onClick={this.handleItemClick} />
            <Menu.Item name='Sprint 2' active={activeItem === 'Sprint 2'} onClick={this.handleItemClick} />
            <Menu.Item name='Sprint 3' active={activeItem === 'Sprint 3'} onClick={this.handleItemClick} />
            <Menu.Item name='Sprint 4' active={activeItem === 'Sprint 4'} onClick={this.handleItemClick} />
            <Menu.Item name='Sprint 5' active={activeItem === 'Sprint 5'} onClick={this.handleItemClick} />
            <Menu.Item name='Sprint 6' active={activeItem === 'Sprint 6'} onClick={this.handleItemClick} />
            
            
             </Menu>
        </Grid.Column>

        <Grid.Column width={12}>
          <Segment>
            This is an stretched grid column. This segment will always match the tab height
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

class Home extends Component {
    render(){
        return (<h1>Hi</h1>);
    }
}

class Home2 extends Component {
    render(){
        return (<h1>Holi</h1>);
    }
}

const AppRo = () => (
  <div>
   
    <Menu fixed='top' inverted>
      <Header_/>
    </Menu>

    <Container text style={{ marginTop: '4em', marginLeft: 0 }}>
    <Main />
    </Container>
  </div>
)

const Main = () => (
  <main>
 <Switch>
      <Route exact path='/MenuExampleTabularOnLeft' component={MenuExampleTabularOnLeft}/>
       <Route exact path='/Home' component={Home}/>
 </Switch>
  </main>
)

const Header_ = () => (

      <Container>
        <Menu.Item as='a' header>
          <Image
            size='mini'
            src='/equifax.png'
            style={{ marginRight: '1.5em', width: '80px' }}
          />
          Project Name
        </Menu.Item>
        <Menu.Item as={Link} to='/Home'>Home</Menu.Item>
        <Menu.Item as={Link} to= '/MenuExampleTabularOnLeft'>MenuExampleTabularOnLeft</Menu.Item>

        <DropdownExampleSearchSelectionTwo/>

      </Container>

)

class App extends React.Component {
   render() {
      return (
      <BrowserRouter>
        <AppRo/>
      </BrowserRouter>
      );
   }
}

export default FixedMenuLayout