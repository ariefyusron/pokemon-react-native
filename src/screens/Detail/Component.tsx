import React, { useCallback } from "react";
import { Image, ScrollView, StatusBar, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { useRoute } from "@react-navigation/native";

import { COLORS } from "../../configs";
import { Reducers } from "../../redux/types";

import styles from "./styles";

const Component = () => {
  const color = COLORS as any;
  const { params } = useRoute();
  const { url } = params as any;

  const homeState = useSelector((state: Reducers) => state.home);
  const index = homeState.listPokemon.findIndex((e) => e.url === url);
  const data = homeState.listPokemon[index];
  const maxStats = Math.max(...data.stats.map((e: any) => e.base_stat));
  const backgroundColor = color[data.types[0].type.name];

  const _getWidth = useCallback((value: number) => (value / maxStats) * 100, [
    maxStats,
  ]);

  return (
    <ScrollView style={{ backgroundColor }}>
      <StatusBar backgroundColor={backgroundColor} />
      <View style={styles.header}>
        <View style={{ flex: 1 }}>
          <View style={styles.wrapTitle}>
            <Text>{`#${String(index + 1).padStart(4, "0")}`}</Text>
            <Text style={styles.marginLeft}>{data.name}</Text>
          </View>
          <View style={styles.wrapTitle}>
            {data.types.map((res: any, ind: number) => (
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
              uri: data.sprites.other["official-artwork"].front_default,
            }}
          />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.wrapCard}>
          <Text>Stats</Text>
          <View style={styles.card}>
            {data.stats.map((item: any, ind: number) => (
              <View key={ind} style={styles.wrapItemStats}>
                <Text style={{ width: "35%" }}>{item.stat.name}</Text>
                <View style={styles.wrapSizeStats}>
                  <View
                    style={[
                      styles.sizeStats,
                      {
                        backgroundColor,
                        width: `${_getWidth(item.base_stat)}%`,
                      },
                    ]}
                  />
                  <Text
                    style={{
                      width: "10%",
                      textAlign: "right",
                      marginLeft: "2%",
                    }}
                  >
                    {item.base_stat}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Component;
