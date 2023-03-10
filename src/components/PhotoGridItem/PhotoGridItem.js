import React from 'react';
import styled from 'styled-components/macro';

function sourceSet(filename, extension) {
  const srcset = [];
  srcset.push(`${filename}.${extension} 1x`);
  srcset.push(`${filename}@2x.${extension} 2x`);
  srcset.push(`${filename}@3x.${extension} 3x`);
  return srcset;
}
const PhotoGridItem = ({ id, src, alt, tags }) => {
  const filename = src.substring(0, src.lastIndexOf('.'));
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source type="image/avif" srcset={sourceSet(filename, 'avif')} />
          <source type="image/jpg" srcset={sourceSet(filename, 'jpg')} />
          <Image src={src} alt={alt} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`;

const Tags = styled.ul`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);

  display: inline;
  margin-right: 8px;
`;

export default PhotoGridItem;
