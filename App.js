import React, {Component} from 'react';
import {
  Container, Content, Text,
  Header, Body, List, ListItem,
  Left, Right, CheckBox, Fab, Icon,
} from 'native-base';
import {FlatList} from 'react-native';


import TodoItem from './components/TodoItem';

export default class App extends Component{

  constructor(){
    super();
    this.state =  {
      count: 0,
      todos: []
    };
  }
  
//ini akan dijalankan sebelum render
  componentWillMount(){
    console.log('componentWillMount');
  }

//ini akan dijalankan setelah render
  componentDidMount(){
    console.log('componentDidMount');
    this.handleIncTodo();
  }




  _keyExtractor = (item, index) => item.id;

  handleIncTodo(){
    let count = this.state.count + 1;
    let todos = this.state.todos;
    todos.push({
      id: count,
      todo: "Not To Do #" + count
    })
    this.setState({
      todo: todos,
      count: count
    });
  }

  render(){
    return(
      <Container>
        <Header>
          <Body>
            <Text>Not To Do List ({this.state.count})</Text>
          </Body>
        </Header>

        <Content>
          <List>

             {this.state.todos.map((todo)=> <TodoItem todo={todo} key={todo.id}/>)}
          </List>
        </Content>

        <Fab
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.handleIncTodo()}>
            <Icon name="add" />
          </Fab>
      </Container>
    );

  }
}
