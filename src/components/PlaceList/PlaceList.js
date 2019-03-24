import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import ListItem from '../ListItem/ListItem';

const placeList = props => {
    return (
        <FlatList 
            data={props.places} 
            style={styles.listContainer} 
            renderItem={(info) => (
                <ListItem 
                    placeName={info.item.name} 
                    placeImage={info.item.image}
                    onItemPressed={() => props.onItemSelected(info.item.key)} />
            )}
        />
               
        // <FlatList
        //     style={styles.listContainer}
        //     data={props.places}
        //     renderItem={(info) => (
        //         <ListItem 
        //             placeName={info.item.name}
        //             placeImage={info.item.image}
        //             onItemPressed={() => props.onItemSelected(info.item.key)}
        //         />
        //     )}
        // />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
})

export default placeList;