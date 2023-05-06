export {
  getReposStateData,
  getReposStateError,
  getReposStateLoading,
  getReposStateReposName,
} from './model/selectors/getReposState'
export { getReposData } from './model/services/getReposData'
export { reposAction, reposReducer } from './model/slice/reposSlice'
export type { RepositoriesType, RepositoryType } from './model/types/repositoryType'
export { ReposTable } from './ui/ReposTable/ReposTable'
