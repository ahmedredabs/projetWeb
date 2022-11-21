import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const FindIcon = name => {
    if (name == 'best') {
        FilterIcon = 'emoji-events';
    } else if (name == 'hot') {
        FilterIcon = 'local-fire-department';
    } else if (name == 'new') {
        FilterIcon = 'new-releases';
    } else if (name == 'top') {
        FilterIcon = 'grade';
    } else if (name == 'rising') {
        FilterIcon = 'trending-up';
    } else {
        FilterIcon = 'filter-list';
    }
};

const actions = [
    {
        text: 'Best',
        name: 'best',
        position: 1,
        color: '#ffa31a',
    },
    {
        text: 'Hot',
        name: 'hot',
        position: 2,
        color: '#ffa31a',
    },
    {
        text: 'New',
        name: 'new',
        position: 3,
        color: '#ffa31a',
    },
    {
        text: 'Top',
        name: 'top',
        position: 4,
        color: '#ffa31a',
    },
    {
        text: 'Rising',
        name: 'rising',
        position: 5,
        color: '#ffa31a',
    },
];

function Filter() {
    return (
        <View style={{width: '105%', height: '1%'}}>
            <FloatingAction
                floatingIcon={<Icon name={FilterIcon} size={30} color="white"/>}
                overlayColor="rgba(68, 68, 68, 0)"
                color="#ffa31a"
                actions={actions}
                onPressItem={name => {
                    Filter = name;
                    FindIcon(name);
                }}
            />
        </View>
    );
}

export default Filter;