import React, { useEffect, useState } from 'react';
import { Skeleton } from 'antd';
import { Spell } from '../services/api';
import logger from '../utils/log';

const AboutUs: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
        <div>
            <div style={{ padding: '2em' }}>
                <h2>Technology Used</h2>

                {loading ? <Skeleton active />
                  : <>
                    <p> <span style={{ fontWeight: 'bold' }}>FrontEnd Library:
            </span>
            ReactJS</p>
    <p><span style={{ fontWeight: 'bold' }}>Programming Language:</span> Typescript</p>
    <p><span style={{ fontWeight: 'bold' }}>State Management: </span>React-Redux</p>
    <p><span style={{ fontWeight: 'bold' }}>UI Library: </span>Ant Design</p>
    <p><span style={{ fontWeight: 'bold' }}>Test Tool: </span>React Testing Library with Jest</p>
    <p><span style={{ fontWeight: 'bold' }}>API: </span>DnD5eAPI<a href={'http://www.dnd5eapi.co/'}></a></p>
    <p><span style={{ fontWeight: 'bold' }}>Deployment: </span>Netlify</p>
    <p><span style={{ fontWeight: 'bold' }}>Version Control: </span>Git</p>
    <p><span style={{ fontWeight: 'bold' }}>Code Editor: WebStrom </span>IDE</p>
                    </>
}</div>
        </div>
  );
};

export default AboutUs;
