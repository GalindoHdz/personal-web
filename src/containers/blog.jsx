import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { spanish } from '../info/spanish';
import { english } from '../info/english';
import { env } from '../env';

export const Blog = () => {
    const theme = useSelector((state) => state.getIn(['Theme', 'value']));
    const language = useSelector((state) => state.getIn(['Language', 'value']));
    const typeClass = `blog_${theme}`;
    const [post, setPost] = useState([]);
    const blog = language ? english.blog : spanish.blog;

    useMemo(() => {
        const getPost = async () => {
            const posts = await fetch(env.MEDIUM);
            const data = await posts.json();
            const array = [];

            data.items.forEach((element) => {
                array.push(element);
            });

            setPost(array);
        };

        getPost();
    }, []);

    return (
        <div className={typeClass}>
            <p className='blog_title'>Blog</p>
            <div className='blog_cards'>
                {post
                    ? post.map((item) => (
                          <div className='blog_card' key={item.title}>
                              <div className='blog_image'>
                                  <img src={item.thumbnail} alt='cover' />
                              </div>
                              <div className='blog_card_data'>
                                  <p>{item.title}</p>
                                  <a
                                      href={item.guid}
                                      target='_blank'
                                      rel='noopener noreferrer'>
                                      {blog.read}
                                  </a>
                              </div>
                          </div>
                      ))
                    : null}
            </div>
        </div>
    );
};
