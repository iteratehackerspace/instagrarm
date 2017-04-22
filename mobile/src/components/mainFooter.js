import React, { Component } from 'react';
import {StyleSheet} from  'react-native';
  import {Container, Content, Footer, FooterTab, Button,Icon} from 'native-base';
  export default class FooterTabs extends Component {
      render() {
          return (
              <Container>
                  <Content />
                  <Footer
                    style={{marginTop: 485}}>
                      <FooterTab
                        style={{backgroundColor: 'white'}}>
                          <Button active>
                              <Icon name="home" />
                          </Button>
                          <Button>
                              <Icon name="camera" />
                          </Button>
                          <Button>
                              <Icon  name="heart" />
                          </Button>
                          <Button>
                              <Icon name="person" />
                          </Button>
                      </FooterTab>
                  </Footer>
              </Container>
          );
      }
  }
