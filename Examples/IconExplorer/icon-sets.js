import { pipe, toPairs, groupBy, map } from 'ramda';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialCommunityIconsGlyphs from 'react-native-vector-icons/glyphmaps/MaterialCommunityIcons.json';

const GLYPH_MAPS = {
  MaterialCommunityIcons: MaterialCommunityIconsGlyphs,
};

const ICON_SETS = {
  MaterialCommunityIcons,
};

const groupGlyphNames = glyphMap =>
  Object.values(groupBy(name => glyphMap[name])(Object.keys(glyphMap)));

const transformIconSets = pipe(
  toPairs,
  map(([name, component]) => ({
    name,
    component,
    glyphNames: groupGlyphNames(GLYPH_MAPS[name]),
  }))
);

export default transformIconSets(ICON_SETS);
