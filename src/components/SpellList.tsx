import React, { useState, useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card, List, Button, Skeleton, Input, Pagination, Spin,
} from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { getSpells, Spell } from '../services/api';
import { addToFavorites } from '../redux/actions/addToFavourites';
import { removeFromFavorites } from '../redux/actions/removeFromFav';
import '../App.css';
import DndeLogo from '../assets/dndcirclelogo-modified.png';

const { Search } = Input;

const SpellList: React.FC = () => {
  const [spells, setSpells] = useState<Spell[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [favorites, setFavorites] = useState<Spell[]>([]); // Initialize favorites state
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 6; // Fixed number of spells to show per page

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchSpells() {
      try {
        const spellsData = await getSpells();
        setSpells(spellsData);
        setLoading(false);
      } catch (error) {
        setLoading(true);
        console.error('Error fetching spells:', error);
      }
    }
    fetchSpells();

    // Load favorites from localStorage on component mount
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    // Save the favorites to localStorage whenever the favorites state changes
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Calculate the start and end index for the current page and
  // filter the spells accordingly to startswith letters

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentSpells = spells.filter((spell) => spell.name.toLowerCase().startsWith(searchTerm.toLowerCase())).slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // handle the toggle of favorites of user selected spells
  const handleAddToFavorites = (spell: Spell) => {
    if (favorites.some((favSpell) => favSpell.index === spell.index)) {
      // If the spell is already in favorites, remove it from favorites
      const updatedFavorites = favorites.filter((favSpell) => favSpell.index !== spell.index);
      setFavorites(updatedFavorites);
      dispatch(removeFromFavorites(spell.index));
    } else {
      // Otherwise, add it to favorites
      const updatedFavorites = [...favorites, spell];
      setFavorites(updatedFavorites);
      dispatch(addToFavorites(spell));
    }
  };

  return (
        <>
            {loading ? (
                <div style={{ margin: 'auto' }}>
                    {/* loading state while api is being fetched */}
                <Skeleton/>
                </div>
            ) : (
                <>
                    <div className="spellListContainer"> {/* Remove unnecessary div */}
                        <div style={{ marginRight: '2em' }}>
                            <h1>Spell List</h1>
                            <Search
                                placeholder="Search spells"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                style={{ marginBottom: '1em' }}
                            />
                            <List
                                className="spellListGrid"
                                grid={{
                                  gutter: 16,
                                  xs: 1,
                                  sm: 1,
                                  md: 1,
                                  lg: 1,
                                  xl: 2,
                                }}
                                dataSource={currentSpells}
                                renderItem={(item) => (
                                    <List.Item>
                                        <Card hoverable={false} style={{ width: '100%', padding: '0.75em' }}>
                                            <div
                                                style={{
                                                  display: 'flex',
                                                  flexDirection: 'column',
                                                  justifyContent: 'center',
                                                  alignItems: 'center',
                                                }}
                                            >
                                                <a style={{ color: 'green' }} href={`/spells/${item.index}`}>
                                                    {item.name}
                                                </a>
                                                <Button
                                                    onClick={() => handleAddToFavorites(item)}
                                                    style={{ marginTop: '1em', fontSize: '0.7em', width: 'auto' }}
                                                >
                                                    {favorites.some((favSpell) => favSpell.index === item.index) ? (
                                                        <>
                                                            Remove from Favorites <HeartFilled style={{ color: 'red' }} />
                                                        </>
                                                    ) : (
                                                        <>
                                                            Add to Favorites <HeartOutlined />
                                                        </>
                                                    )}
                                                </Button>
                                            </div>
                                        </Card>
                                    </List.Item>
                                )}
                            />
                        </div>

                        {loading ? (
                            <Skeleton active /> // Use Skeleton without a fixed width when loading
                        ) : (
                            <div className={'favDiv'} style={{ marginRight: '1em' }}>
                                <h1>Favorites</h1>
                                <List dataSource={favorites} renderItem={(item) => <li style={{ listStyle: 'disc' }}>{item.name}</li>} />
                            </div>
                        )}
                    </div>
                    {/* Add Pagination component */}
                    <Pagination
                        current={currentPage}
                        pageSize={pageSize}
                        total={spells.filter((spell) => spell.name.toLowerCase().includes(searchTerm.toLowerCase())).length}
                        onChange={handlePageChange}
                        style={{ marginTop: '1em', textAlign: 'center' }}
                    />
                </>
            )}
        </>
  );
};

export default SpellList;
