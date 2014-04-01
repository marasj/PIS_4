function sortFromLargestToSmallest(array)
{
	return array.sort(function(a, b)
	{
		return b - a;		
	});
}
