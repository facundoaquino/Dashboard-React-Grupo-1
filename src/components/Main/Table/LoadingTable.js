import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
const LoadingTable = () => {
	const rounds = ['', '', '', '', '', '', '', '', '', '', '', '', '', '']
	console.log(rounds.length)
	return (
		<>
			{rounds.map((r) => (
				<tr>
					<td>
						<SkeletonTheme color="#ff52529f" highlightColor="#ff5252">
							<Skeleton height={16} count={1} width={100} />
						</SkeletonTheme>
					</td>
					<td>
						<SkeletonTheme color="#ff52529f" highlightColor="#ff5252">
							<Skeleton height={16} count={1} width={100} />
						</SkeletonTheme>
					</td>
					<td>
						<SkeletonTheme color="#ff52529f" highlightColor="#ff5252">
							<Skeleton height={16} count={1} width={300} />
						</SkeletonTheme>
					</td>
					<td>
						<SkeletonTheme color="#ff52529f" highlightColor="#ff5252">
							<Skeleton height={16}  circle={true} height={40} width={40} />
						</SkeletonTheme>
					</td>
				</tr>
			))}
		</>
	)
}

export default LoadingTable
