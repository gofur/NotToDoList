import React, {Component} from 'react';
import Expo from 'expo';
import {Container, Content, Text, Form, Item, Label, Input, Button} from 'native-base';

export default class TodosCreate extends Component {

  constructor(){
    super();
    this.state = {
      text: ""
    };
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ loading: false });
  }

  handleSubmit(){
    if(this.state.text !== undefined)
    {
      alert(this.state.text);
    }
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return(
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Not Todo</Label>
              <Input onChangeText={(text) => this.setState({text})}/>
            </Item>
            <Button full primary onPress={()=>this.handleSubmit()}>
              <Text>Submit</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    )
  }
}
