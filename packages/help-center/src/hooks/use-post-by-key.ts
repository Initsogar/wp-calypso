import { useQuery } from '@tanstack/react-query';
import apiFetch from '@wordpress/api-fetch';
import wpcomRequest, { canAccessWpcomApis } from 'wpcom-proxy-request';
import { ArticleContentProps } from '../types';

function fetchForKey( postKey: { blogId: number; postId: number } ) {
	return canAccessWpcomApis()
		? wpcomRequest< ArticleContentProps >( {
				path: `help/article/${ encodeURIComponent( postKey.blogId ) }/${ encodeURIComponent(
					postKey.postId
				) }`,
				apiNamespace: 'wpcom/v2/',
				apiVersion: '2',
		  } )
		: apiFetch< ArticleContentProps >( {
				path: `/help-center/fetch-post?post_id=${ encodeURIComponent(
					postKey.postId
				) }&blog_id=${ encodeURIComponent( postKey.blogId ) }`,
		  } );
}

export function usePostByKey( postKey: { blogId: number; postId: number } | null ) {
	return useQuery( {
		queryKey: [ 'support-status', postKey ],
		queryFn: () => postKey && fetchForKey( postKey ),
		enabled: !! postKey,
		refetchOnWindowFocus: false,
		staleTime: 12 * 3600, // 12 hours
	} );
}
