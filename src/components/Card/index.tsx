import React from 'react';

import { ReactComponent as ArrowCircle } from '../../assets/arrow-circle.svg';
import { ReactComponent as ArrowIcon } from '../../assets/arrow.svg';
import { ReactComponent as BookmarkIcon } from '../../assets/bookmark.svg';
import * as S from './styled';

import { CardProps } from './Card';

export const Card: React.FC<CardProps> = ({ large }) => {
  return (
    <S.Card large={large}>
      <div className="flex-container">
        <div className="category">weekly brief</div>
        {large && <div className="tag">latest research</div>}
      </div>
      <div className="title">
        The trend is your friend! Is this a new bubble?
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
          <div className="date">17 Feb</div>
          <div className="separator" />
          <div className="duration">6 min read</div>
        </div>
        <div className="flex-container">
          <ArrowIcon className="card-icon" />
          <BookmarkIcon className="card-icon" />
        </div>
      </div>
    </S.Card>
  );
};
