## My Solution

In the design, there wasn't a requirement for an onChange method for Steps. I'm not a fan of mutating objects within the app. To me, it can be very hard to debug if an object was modified somewhere, causing and issue, and you have to figure out where. So I added an onChange to the Step components that gets passed down from the ShippingLabelMaker. This updates the shippingInfo, and now you have one place you can check to see where the object has been modified.

## Testing

I used Jest and Enzyme to test the components. Jest is everything in one, and that's why it's my favorite. It's a test runner, assertion library, does code coverage, can mock functions and more.

## Other thoughts

One thing I had trouble with is figuring out what printing the label meant. I wasn't sure so I left that alone, however the onComplete does get called when it should.
