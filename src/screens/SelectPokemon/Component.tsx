import React, { useCallback, useState } from "react";
import {
  FlatList,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { Reducers } from "../../redux/types";
import { COLORS } from "../../configs";

import styles from "./styles";

const Component = () => {
  const navigation = useNavigation();

  const [activeType, setActiveType] = useState("all");
  const homeState = useSelector((state: Reducers) => state.home);

  const _getId = useCallback(
    (url: string) => homeState.listPokemon.findIndex((e) => e.url === url) + 1,
    [homeState.listPokemon]
  );

  const _renderItem = useCallback(
    ({ item }: { item: any }) => {
      const color = COLORS as any;

      return (
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Detail", { urlCompare: item.url })
            }
            style={[
              styles.card,
              {
                backgroundColor: color[item.types[0].type.name],
              },
            ]}
          >
            <View style={{ flex: 1 }}>
              <View style={styles.wrapTitle}>
                <Text>{`#${String(_getId(item.url)).padStart(4, "0")}`}</Text>
                <Text style={styles.marginLeft}>{item.name}</Text>
              </View>
              <View style={styles.wrapTitle}>
                {item.types.map((res: any, ind: number) => (
                  <View key={ind} style={styles.wrapTypeName}>
                    <Text>{res.type.name}</Text>
                  </View>
                ))}
              </View>
            </View>
            <View style={styles.wrapImage}>
              <Image
                style={styles.image}
                source={{
                  uri:
                    item.sprites &&
                    item.sprites.other["official-artwork"].front_default,
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      );
    },
    [_getId, navigation]
  );

  const _renderItemType = useCallback(
    ({ item }: { item: any }) => (
      <TouchableOpacity
        style={[
          styles.buttonType,
          item.name === activeType && { backgroundColor: COLORS.black03 },
        ]}
        onPress={() => setActiveType(item.name)}
      >
        <Text>{item.name}</Text>
      </TouchableOpacity>
    ),
    [activeType]
  );

  const _dataPokemon = useCallback(() => {
    if (activeType === "all") {
      return homeState.listPokemon;
    }
    return homeState.listPokemon.filter(
      (item) =>
        item.types.findIndex((e: any) => e.type.name === activeType) >= 0
    );
  }, [activeType, homeState.listPokemon]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.background} barStyle="dark-content" />
      <View style={styles.wrapHeader}>
        <Text style={styles.textHeader}>Select</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Cancel</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.wrapType}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={homeState.listType}
          keyExtractor={(item, index) => String(index)}
          renderItem={_renderItemType}
        />
      </View>

      <FlatList
        data={_dataPokemon()}
        keyExtractor={(item, index) => String(index)}
        renderItem={_renderItem}
      />
    </View>
  );
};

export default Component;
