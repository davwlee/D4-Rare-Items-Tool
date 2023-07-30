import React, { useState } from 'react';

const itemsData = [
// array = { name: '', monsters: '', dungeon: '', nmd: '',},
{name: 'Axes', monsters: 'Cannibals, Fallen, Goatmen', dungeon: 'Bastion of Faith, Bloodsoaked Crag, Charnel House, Earthen Wound, Faceless Shrine, Guulrahn Slums, Pallid Delve, Steadfast Barracks', nmd: 'Bastion of Faith, Charnel House, Faceless Shrine, Pallid Delve'},

{name: 'Bows', monsters: 'ghost', dungeon: 'Abandoned Mineworks, Black Asylum, Broken Bulwark, Buried Halls, Calibel\'s Mine, Crumbling Hekma, Earthen Wound, Forbidden City, Guulrahn Slums, Halls of the Damned, Haunted Refuge, Immortal Emanation, Iron Hold, Lost Archives, Lost Keep, Maddux Watch, Mariner\'s Refuge, Oblivion, Onyx Hold, Penitent Cairns, Sealed Archives, Seaside Descent, Stockades, Sunken Ruins, Tomb of the Saints, Twisted Hollow, Whispering Vault', nmd: 'Immortal Emanation, Iron Hold, Lost Keep, Mariner\'s Refuge, Stockades, Tomb of the Saints'},

{name: 'Daggers', monsters: 'Bandits, Snakes', dungeon: 'Calibel\'s Mine, Deserted Underpass, Faceless Shrine, Forgotten Ruins, Ghoa Ruins, Hakan\'s Ruins, Light\'s Watch, Luban\'s Rest, Maugan\'s Works, Maulwood, Mournfield, Putrid Aquifer, Raethwind Wilds, Renegade\'s Retreat, Serpent\'s Lair, Shadowed Plunge, Uldur\'s Cave, Witchwater', nmd: 'Faceless Shrine, Forgotten Ruins, Uldur\'s Cave'},

{name: 'Crossbows', monsters: 'Skeletons, Werewolves, Wildlife', dungeon: 'Aldurwood, Ancient Reservoir, Belfry Zakara, Betrayer\'s Row, Black Asylum, Caldera Gate, Collapsed Vault, Crumbling Hekma, Crusaders\' Cathedral, Dead Man\'s Dredge, Defiled Catacomb, Demon\'s Wake, Derelict Lodge, Feral\'s Den, Forgotten Depths, Forgotten Ruins, Garan Hold, Hakan\'s Refuge, Halls of the Damned, Hoarfrost Demise, Howling Warren, Jalal\'s Vigil, Komdor Temple, Kor Dragan Barracks, Light\'s Watch, Luban\'s Rest, Maddux Watch, Maulwood, Mercy\'s Reach, Mournfield, Nostrava Deepwood, Pallid Delve, Seaside Descent, Stockades, Sunken Library, Tormented Ruins, Underroot, Yshari\'s Sanctum, Zenith', nmd: 'Ancient Reservoir, Betrayer\'s Row, Collapsed Vault, Dead Man\'s Dredge, Frogotten Ruins, Garan Hold, Hoarfrost Demise, Komdor Temple, Mercy\'s Reach, Nostrava Deepwood, Pallid Delve, Stockades'},

{name: 'Maces', monsters: 'Bandits', dungeon: 'Calibel\'s Mine, Faceless Shrine, Light\'s Watch, Luban\'s Rest, Maugan\'s Works, Maulwood, Mournfield, Raethwind Wilds, Renegade\'s Retreat, Uldur\'s Cave', nmd:'Light\'s Watch, Luban\'s Rest, Maugan\'s Works, Maulwood, Mournfield'},

{name: 'Polearms', monsters: 'Snakes', dungeon: 'Deserted Underpass, Forgotten Ruins, Ghoa Ruins, Hakan\'s Refuge, Putrid Aquifer, Serpent\'s Lair, Shadowed Plunge, Witchwater', nmd: 'Forgotten Ruins'},

{name: 'Scythes', monsters: 'Drowned', dungeon: 'Akkhan\'s Grasp, Belfry Zakara, Corrupted Grotto, Dead Man\'s Dredge, Fetid Mausoleum, Flooded Depths, Ghoa Ruins, Haunted Refuge, Mariner\'s Refuge, Putrid Aquifer, Ruins of Eridu, Sunken Library, Vault of the Forsaken', nmd: 'Akkhan\'s Grasp, Dead Man\'s Dredge, Mariner\'s Refuge'},

{name: 'Staves', monsters: 'Cultist, Fallen, Goatmen', dungeon: 'Ancient\'s Lament, Anica\'s Claim, Broken Bulwark, Buried Halls, Champion\'s Demise, Conclave, Cultist Refuge, Dark Ravine, Demon\'s Wake, Domhainne Tunnels, Endless Gates, Faceless Shrine, Fading Echo, Forsaken Quarry, Grinning Labyrinth, Halls of the Damned, Heretics Asylum, Hoarfrost Demise, Inferno, Komdor Temple, Leviathan\'s Maw, Mercy\'s Reach, Oblivion, Oldstones, Path of the Blind, Rimescar Caverns, Ruins of Eridu, Sepulcher of the Forsworn, Serpent\'s Lair, Shadowed Plunge, Shivta Ruins, Steadfast Barracks, Wretched Delve, Yshari\'s Sanctum', nmd: 'Domhainne Tunnels, Faceless Shrine, Halls of the Damned, Hoarfrost Demise, Komdor Temple, Mercy\'s Reach, Path of the Blind'},

{name: 'Swords', monsters: 'Beast, Knights, Skeletons, Zombies', dungeon: 'Akkhan\'s Grasp, Ancient Reservoir, Anica\'s Claim, Belfry Zakara, Betrayer\'s Row, Black Asylum, Blind Burrows, Caldera Gate, Collapsed Vault, Corrupted Grotto, Crumbling Hekma, Crusaders Cathedral, Defiled Catacomb, Demon\'s Wake, Derelict Lodge, Fetid Mausoleum, Forgotten Depths, Forgotten Ruins, Garan Hold, Guulrahn Canals, Hakan\'s Refuge, Hallowed Ossuary, Halls of the Damned, Haunted Refuge, Hoarfrost Demise, Komdor Temple, Kor Dragan Barracks, Leviathan\'s Maw, Light\'s Refuge, Luban\'s Rest, Maddux Watch, Mournfield, Nostrava Deepwood, Onyx Hold, Pallid Delve, Path of the Blind, Penitent Cairns, Ruins of Eridu, Sanguine Chapel, Sealed Archives, Seaside Descent, Shivta Ruins, Stockades, Sunken Library, Sunken Ruins, Tomb of the Saints, Tormented Ruins, Uldur\'s Cave, Underroot, Vault of The Forsaken, Yshari\'s Sanctum, Zenith', nmd: 'Akkhan\'s Grasp, Ancient Reservoir, Betrayer\'s Row, Collapsed Vault, Forgotten Ruins, Garan Hold, Halls of the Damned, Hoarfrost Demise, Komdor Temple, Nostrava Deepwood, Pallid Delve, Path of the Blind, Stockades, Tomb of the Saints, TWisted Hollow, Uldur\'s Cave'},

{name: 'Wands', monsters: 'Ghost, Vampires', dungeon: 'Abandoned Mineworks, Akkhan\'s Grasp, Black Asylum, Broken Bulwark, Buried Halls, Calibel\'s Mine, Collapsed Vault, Crumbling Hekma, Dead Man\'s Dredge, Earthen Wound, Fetid Mausoleum, Forbidden City, Forbidden City, Guulrahn Slums, Hallowed Ossuary, Halls of the Damned, Haunted Refuge, Heathen\'s Keep, Immortal Emanation, Iron Hold, Kor Dragan Barracks, Lost Archives, Lost Keep, Maddux Watch, Mariner\'s Refuge, Oblivion, Onyx Hold, Penitent Cairns, Sanguine Chapel, Sealed Archives, Seaside Descent, Stockades, Sunken Ruins, Tomb of the Saints, Twisted Hollow, Whispering Vault, Zenith', nmd: 'Akkhan\'s Grasp, Collapsed Vault, Dead Man\'s Dredge, Halls of the Damned, Immortal Emanation, Iron Hold, Lost Keep, Mariner\'s Refuge, Stockades, Tomb of the Saints, Twisted Hollow'},

{name: 'Helmets', monsters: 'Cannibals, Cultists, ', dungeon: 'Bastion of Faith, Bloodsoaked Crag, Buried Halls, Charnel House, Conclave, Cultist Refuge, Dark Ravine, Earthen Wound, Endless Gates, Faceless Shrine, Guulrahn Slums, Halls of the Damned, Heretics Asylum, Inferno, Leviathan\'s Maw, Pallid Delve, Path of the Blind, Serpent\'s Lair, Shadowed Plunge, Steadfast Barracks, Yshari\'s Sanctum', nmd: 'Bastion of Faith, Charnel House, Faceless Shrine, Halls of the Damned, Pallid Delve, Path of the Blind'},

{name: 'Chests', monsters: 'Beast, Knights, Vampires, Werewolves, Wildlife', dungeon: 'Akkhan\'s Grasp, Aldurwood, Blind Burrows, Collapsed Vault, Corrupted Grotto, Dead Man\'s Dredge, Derelict Lodge, Ferals Den, Fetid Mausoleum, Forbidden City, Hallowed Ossuary, Haunted Refuge, Heathen\'s Keep, Howling Warren, Immortal Emanation, Jalal\'s Vigil, Kor Dragan, Leviathan\'s Maw, Light\'s Refuge, Light\'s Watch, Maulwood, Mercy\'s Reach, Mournfield, Path of the Blind, Sanguine Chapel, Tomb of the Saints, Uldur\'s Cave, Zenith', nmd: 'Akkhan\'s Grasp, Collapsed Vault, Dead Man\'s Dredge, Immortal Emanation, Mercy\'s Reach, Path of the Blind, Tomb of the Saints, Uldur\'s Cave'},

{name: 'Gloves', monsters: 'Fallen, Spiders', dungeon: 'Abandoned Mineworks, Ancient\'s Lament, Blind Burrows, Champion\'s Demise, Defiled Catacomb, Demon\'s Wake, Deserted Underpass, Fading Echo, Ferals Den, Grinning Labyrinth, Guulrahn Canals, Hive Diablo, Oblivion, Oldstones, Pallid Delve, Ruins of Eridu, Sarat\'s Lair, Sirocco Caverns, Whispering Pines, Witchwater, Wretched Delve', nmd: 'Pallid Delve'},

{name: 'Pants', monsters: 'Drowned, Zombies', dungeon: 'Akkhan\'s Grasp, Anica\'s Claim, Belfry Zakara, Corrupted Grotto, Dead Man\'s Dredge, Derelict Lodge, Fetid Mausoleum, Flooded Depths, Forgotten Depths, Ghoa Ruins, Guulrahn Canals, Hallowed Ossuary, Haunted Refuge, Mariner\'s Refuge, Mournfield, Onyx Hold, Penitent Cairns, Putrid Aquifer, Ruins of Eridu, Sanguine Chapel, Sealed Archives, Shivta Ruins, Stockades, Sunken Library, Sunken Ruins, Underroot, Vault of The Forsaken, Zenith', nmd: 'Akkhan\'s Grasp, Dead Man\'s Dredge, Mariner\'s Refuge, Stockades'},

{name: 'Boots', monsters: '', dungeon: '', nmd: ''},

{name: 'Amulets', monsters: '', dungeon: '', nmd: ''},

{name: 'Rings', monsters: '', dungeon: '', nmd: ''},

{name: 'Shields', monsters: 'Knights, Skeletons, ', dungeon: 'Ancient Reservoir, Belfry Zakara, Betrayer\'s Row, Black Asylum, Caldera Gate, Cathedral of Light (Capstone), Collapsed Vault, Crumbling Hekma, Crusaders Cathedral, Defiled Catacomb, Demon\'s Wake, Forgotten Depths, Forgotten Ruins, Garan Hold, Hakan\'s Refuge, Halls of the Damned, Hoarfrost Demise, Komdor Temple, Kor Dragan Barracks, Luban\'s Rest, Maddux Watch, Mournfield, Nostrava Deepwood, Pallid Delve, Seaside Descent, Stockades, Sunken Library, Tormented Ruins, Underroot, Yshari\'s Sanctum, Zenith', nmd: 'Ancient Reservoir, Collapsed Vault, Forgotten Ruins, Garan Hold, Halls of the Damned, Hoarfrost Demise, Komdor Temple, Nostrava Deepwood, Pallid Delve, Stockades'},

{name: 'Focus', monsters: '', dungeon: '', nmd: ''},

{name: 'Totems', monsters: 'Goatmen', dungeon: 'Anica\'s Claim, Broken Bulwark, Champion\'s Demise, Domhainne Tunnels, Forsaken Quarry, Hoarfrost Demise, Komdor Temple, Mercy\'s Reach, Oldstones, Rimescar Caverns, Sepulcher of the Forsworn, Shivta Ruins', nmd: 'Domhainne Tunnels, Hoarfrost Demise, Komdor Temple, Mercy\'s Reach'},


];

const ItemSelector = () => {
  const [selectedItem, setSelectedItem] = useState(itemsData[0]);

  const handleItemChange = (event) => {
    const selectedItemName = event.target.value;
    const selected = itemsData.find(item => item.name === selectedItemName);
    setSelectedItem(selected);
  };

  return (
    <div>
      <label htmlFor="itemSelect">Select an item: </label>
      <select id="itemSelect" onChange={handleItemChange} value={selectedItem.name}>
        {itemsData.map((item) => (
          <option key={item.name} value={item.name}>{item.name}</option>
        ))}
      </select>

      <h2>Selected Item:</h2>
      <p>Name: {selectedItem.name}</p>
      <p>Monsters: {selectedItem.monsters}</p>
      <p>Dungeon Location: {selectedItem.dungeon}</p>
      <p>Season 1 Nightmare Dungeons: {selectedItem.nmd}</p>
      <p>Please report bugs to me on Twitter <a href="https://www.twitter.com/@DaveWeedle">@DaveWeedle</a></p>
    </div>
  );
};

export default ItemSelector;
