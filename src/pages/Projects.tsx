import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { IProjectProps } from '../types/types';
import Project from '../components/Project';
import ShopaholicImg from '../assets/shopaholic.png';

function Projects() {
  const projects = useMemo<IProjectProps[]>(() => {
    return [
      {
        url: '/projects/shopaholic',
        title: 'Shopaholic',
        imgUrl: ShopaholicImg
      }
    ];
  }, []);

  return (
    <div className="page-full">
      <Helmet>
        <title>Roh Minchul | Projects</title>
      </Helmet>
      <Header />
      <div className="page-responsive">
        <div className="grid grid-cols-2 gap-x-2 gap-y-4 mt-6">
          {projects.map((project) => {
            return (
              <Project
                key={project.title}
                url={project.url}
                title={project.title}
                imgUrl={project.imgUrl}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
