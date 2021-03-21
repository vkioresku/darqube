import React from 'react';

import { ReactComponent as ArrowCircle } from '@Assets/arrow-circle.svg';
import { ReactComponent as ArrowIcon } from '@Assets/arrow.svg';
import { ReactComponent as BookmarkIcon } from '@Assets/bookmark.svg';
import { ReactComponent as BookmarkActiveIcon } from '@Assets/bookmark-active.svg';
import * as S from './styled';

import { CardProps } from './Card';

export const Card: React.FC<CardProps> = ({
  large,
  category,
  datetime,
  headline,
  summary,
  image,
  url,
  onBookmark,
  bookmarked,
}) => {
  return (
    <S.Card large={large}>
      <img className="card-image" src={image} alt={headline} />
      <div className="flex-container">
        <div className="category">{category}</div>
        {large && <div className="tag">latest research</div>}
      </div>
      <div className="content">
        <div className="title">{headline}</div>
        <div className="summary">{summary}</div>
      </div>
      <div className="bottom-content">
        <div className="flex-container">
          {large && (
            <>
              <div className="explore">
                <ArrowCircle className="card-arrow-circle" />
                Read the research
              </div>
              <div className="separator" />
            </>
          )}
          <div className="date">{datetime}</div>
          <div className="separator" />
          <div className="duration">
            {Math.floor(Math.random() * 10)} min read
          </div>
        </div>
        <div className="flex-container">
          <a
            href={`https://www.facebook.com/sharer.php?u=${url}`}
            target="_blank"
            rel="noreferrer"
          >
            <ArrowIcon className="card-icon" />
          </a>
          <button className="bookmark" onClick={onBookmark} type="button">
            {bookmarked ? (
              <BookmarkActiveIcon className="card-icon" />
            ) : (
              <BookmarkIcon className="card-icon" />
            )}
          </button>
        </div>
      </div>
    </S.Card>
  );
};
