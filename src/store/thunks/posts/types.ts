import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { FetchStatus } from '../../../model/fetch-status';
import { PostsState } from '../../../model/posts';

export type PostsBuilder = ActionReducerMapBuilder<PostsState & FetchStatus>;
