import React, { useCallback, useEffect } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { getPokemon } from "../../redux/actions";
import { Reducers } from "../../redux/types";
import { COLORS } from "../../configs";

import styles from "./styles";

const Component = () => {
  const dispatch = useDispatch();

  const homeState = useSelector((state: Reducers) => state.home);

  useEffect(() => {
    dispatch(getPokemon());
  }, [dispatch]);

  const _renderLoading = useCallback(
    (size: "large" | "small" = "large") => (
      <View style={styles.wrapLoading}>
        <ActivityIndicator size={size} color={COLORS.black01} />
      </View>
    ),
    []
  );

  const _renderItem = useCallback(
    ({ item, index }: { item: any; index: number }) => {
      const color = COLORS as any;

      return (
        <View style={styles.row}>
          <View
            style={[
              styles.card,
              {
                backgroundColor: color[item.types && item.types[0].type.name],
              },
            ]}
          >
            <View style={{ flex: 1 }}>
              <View style={styles.wrapTitle}>
                <Text>{`#${String(index).padStart(4, "0")}`}</Text>
                <Text style={styles.marginLeft}>{item.name}</Text>
              </View>
              <View style={styles.wrapTitle}>
                {item.isLoading === undefined || item.isLoading ? (
                  <View style={styles.wrapTypeName}>
                    <Text>Loading...</Text>
                  </View>
                ) : (
                  <>
                    {item.types &&
                      item.types.map((res: any, ind: number) => (
                        <View key={ind} style={styles.wrapTypeName}>
                          <Text>{res.type.name}</Text>
                        </View>
                      ))}
                  </>
                )}
              </View>
            </View>
            <View style={styles.wrapImage}>
              {item.isLoading === undefined || item.isLoading ? (
                _renderLoading("small")
              ) : (
                <Image
                  style={styles.image}
                  source={{
                    uri:
                      item.sprites &&
                      item.sprites.other["official-artwork"].front_default,
                  }}
                />
              )}
            </View>
          </View>
        </View>
      );
    },
    [_renderLoading]
  );

  return (
    <View style={styles.container}>
      <View style={styles.wrapHeader}>
        <Text style={styles.textHeader}>Pokemon</Text>
      </View>
      {!homeState.isLoading ? (
        <FlatList
          data={homeState.list}
          keyExtractor={(item, index) => String(index)}
          renderItem={_renderItem}
          ListFooterComponent={() => (
            <View style={styles.wrapFooter}>{_renderLoading()}</View>
          )}
        />
      ) : (
        _renderLoading()
      )}
    </View>
  );
};

export default Component;
