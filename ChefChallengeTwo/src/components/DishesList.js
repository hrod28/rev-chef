'use strict';
import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  ScrollView,
  StyleSheet,
  ListView,
  Image,
  TouchableOpacity
} from 'react-native';
import axios from 'axios';
import { Card, CardSection, Input, Button, Spinner, Header } from './common';
import DishesDetail from './DishesDetail';
import styles from '../styles';

class DishesList extends Component {
  state = { dishes: [] };

  componentWillMount() {
    axios.get('https://cap-backend.herokuapp.com/api/dishes')
         .then(response => this.setState({ dishes: response.data }));
  }


  renderDishes() {
    return this.state.dishes.map(dish =>
      <DishesDetail key={dish.plate_name} dish={dish} />
    );
  }

   render () {
     console.log(this.state);


    return (

    <Card>

      <CardSection>
        <Image
          style={styles.imageStyle}
          source={{ uri: 'https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/17814533_777769615722762_813215094853927895_o.jpg?oh=ebe117ab59dcf2781bf8488bfc421a53&oe=595CFB47' }} />
      </CardSection>

        <View>
          <Header headerText="Today's Menu" />
          <TouchableOpacity
            onPress={() => this.props.navigator.push({name: 'LandingMenu'})}
          >
            <Text style={styles.link}>
              Back
            </Text>
          </TouchableOpacity>
        </View>



      <ScrollView>
        {this.renderDishes()}

        <Card>
        <CardSection>
          <Image
            style={styles.imageStyle}
            source={{ uri: 'https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/17814533_777769615722762_813215094853927895_o.jpg?oh=ebe117ab59dcf2781bf8488bfc421a53&oe=595CFB47' }} />
        </CardSection>
        </Card>

        <Card>
        <CardSection>
        <Image
        style={styles.imageStyle}
        source={{ uri: 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/13620808_510156309173515_2481120937157259819_n.jpg?oh=43ce736ec4611b24a8197978e15bd1c3&oe=59523D01' }} />
        </CardSection>
        </Card>

      </ScrollView>

    </Card>

    );
  }
}

export default DishesList;
