import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';

import RecipeCard from '../components/RecipeCard';


const { width } = Dimensions.get('screen');
import products from '../constants/products';
import ScreenNames from '../navigation/ScreenNames';

const Home = () => {
  const renderProducts = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.products}>
        <Block flex>
          <RecipeCard
            product={{
              title: 'Recipes Search',
              image: 'https://food-ubc.b-cdn.net/wp-content/uploads/2020/02/Save-Money-On-Groceries_UBC-Food-Services.jpg',
              price: 220,
            }}
            horizontal
            navigateTo={ScreenNames().Drawer.RecipeSearch}
          />
          {/* <RecipeCard product={products[0]} horizontal /> */}
          {/* <Block flex row>
            <RecipeCard product={products[1]} style={{ marginRight: theme.SIZES.BASE }} />
            <RecipeCard product={products[2]} />
          </Block>
          <RecipeCard product={products[3]} horizontal />
          <RecipeCard product={products[4]} full /> */}
        </Block>
        <Block flex>
          <RecipeCard
            product={{
              title: 'Favorites Recipes',
              image: 'https://www.diabetesfoodhub.org/system/user_files/Images/1837-diabetic-pecan-crusted-chicken-breast_JulAug20DF_clean-simple_061720.jpg',
              price: 220,
            }}
            horizontal
            navigateTo={ScreenNames().Drawer.Favorites}
          />
          {/* <RecipeCard product={products[0]} horizontal /> */}
          {/* <Block flex row>
            <RecipeCard product={products[1]} style={{ marginRight: theme.SIZES.BASE }} />
            <RecipeCard product={products[2]} />
          </Block>
          <RecipeCard product={products[3]} horizontal />
          <RecipeCard product={products[4]} full /> */}
        </Block>
      </ScrollView>
    )
  }

  return (
    <Block flex center style={styles.home}>
      {renderProducts()}
    </Block>
  );
}

export default Home;

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
  },
  header: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 4,
    zIndex: 2,
  },
  tabs: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.50,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '300'
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.MUTED,
  },
  products: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
  },
});
