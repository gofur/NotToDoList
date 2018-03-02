import React, {Component} from 'react';
import {
  Container, Content, Text,
  Header, Body, List, ListItem,
  Left, Right, CheckBox, Fab, Icon,
} from 'native-base';
import {FlatList} from 'react-native';


import TodoItem from '../components/TodoItem';

export default class Todos extends Component{

  constructor(){
    super();
    this.state =  {
      count: 0,
      todos: []
    };
  }

  _keyExtractor = (item, index) => item.id;

  render(){
    return(
      <Container>

        <Content>
          <List>

             {this.state.todos.map((todo)=> <TodoItem todo={todo} key={todo.id}/>)}
          </List>
        </Content>

        <Fab
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.props.navigation.navigate('TodosCreate')}>
            <Icon name="add" />
          </Fab>
      </Container>
    );

  }
}
