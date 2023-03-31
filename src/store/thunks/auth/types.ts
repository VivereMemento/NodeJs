import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { UserState } from '../../../model/user';

export type PostsBuilder = ActionReducerMapBuilder<UserState>;
